import fs from 'fs'; // Importing the file system module to read files
import path from 'path'; // Importing the path module to handle file paths
import { notFound } from 'next/navigation'; // Importing notFound function for handling 404 errors
import { MDXRemote } from 'next-mdx-remote/rsc'; // Importing MDXRemote for rendering MDX content
import Link from 'next/link'; // Importing Link component for client-side navigation
import { Button } from "@/components/ui/button"; // Importing Button component from the UI library
import CodeBlock from '@/components/CodeBlock';
import type { MDXComponents } from 'mdx/types'; // Import MDXComponents type

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  const docsDirectory = path.join(process.cwd(), 'app', 'docs'); // Defining the path to the docs directory
  const filenames = fs.readdirSync(docsDirectory); // Reading the filenames in the docs directory
  return filenames
    .filter(name => name.endsWith('.md')) // Filtering for markdown files
    .map(name => ({
      slug: name.replace(/\.md$/, ''), // Creating a slug by removing the .md extension
    }));
}

// Default export for the DocPage component
export default async function DocPage({ params }: { params: { slug: string } }) {
  const docsDirectory = path.join(process.cwd(), 'app', 'docs'); // Defining the path to the docs directory
  const fullPath = path.join(docsDirectory, `${params.slug}.md`); // Constructing the full path to the markdown file

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // Reading the contents of the markdown file
    const title = fileContents.split('\n')[0].replace(/^#\s*/, '').trim(); // Extracting the title from the first line of the file

    const components: MDXComponents = {
      pre: ({ className, children, ...props }: React.HTMLProps<HTMLPreElement>) => (
        <CodeBlock className={className} wrapLines={true} {...props}>
          {children}
        </CodeBlock>
      ),
    };

    // Rendering the DocPage component
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">{title}</h1> {/* Displaying the title */}
          <Link href="/docs" passHref> {/* Link to navigate back to documentation */}
            <Button className="mb-4">Volver a la Documentación</Button> {/* Button for navigation */}
          </Link>
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <MDXRemote source={fileContents} components={components} /> {/* Rendering the MDX content */}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error leyendo el archivo:', error); // Logging any errors that occur while reading the file
    notFound(); // Triggering a 404 error if the file cannot be read
  }
}