import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const docsDirectory = path.join(process.cwd(), 'app', 'docs');

  try {
    const filenames = fs.readdirSync(docsDirectory);
    
    const docs = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const filePath = path.join(docsDirectory, name);
        const content = fs.readFileSync(filePath, 'utf8');
        const title = content.split('\n')[0].replace(/^#\s*/, '').trim();
        return {
          name,
          title,
          path: `/docs/${name.replace(/\.md$/, '')}`
        };
      });

    return NextResponse.json(docs);
  } catch {
    return NextResponse.json({ error: 'Error reading docs directory' }, { status: 500 });
  }
}