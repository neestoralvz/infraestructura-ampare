'use client'

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  wrapLines?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, wrapLines = false }) => {
  const [isCopied, setIsCopied] = useState(false);
  const language = className ? className.replace(/language-/, '') : 'text';
  let code = '';

  if (typeof children === 'string') {
    code = children.trim();
  } else if (React.isValidElement(children) && children.props.children) {
    code = children.props.children.trim();
  } else if (Array.isArray(children)) {
    code = children.map(child => 
      typeof child === 'string' ? child : ''
    ).join('').trim();
  }

  if (!code) {
    return null;
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded text-xs"
      >
        {isCopied ? 'Copiado!' : 'Copiar'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLines={wrapLines}
        wrapLongLines={wrapLines}
        customStyle={{
          borderRadius: '0.375rem',
          padding: '1rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;