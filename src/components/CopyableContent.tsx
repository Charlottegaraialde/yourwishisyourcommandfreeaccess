import React, { useState } from 'react';

interface CopyableContentProps {
  content: string;
  children: React.ReactNode;
}

const CopyableContent: React.FC<CopyableContentProps> = ({ content, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error while copying:', err);
    }
  };

  return (
    <div className="relative group">
      {children}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-navy-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy code"
      >
        {copied ? (
          <span className="text-green-400">✓</span>
        ) : (
          <span className="text-white">📋</span>
        )}
      </button>
    </div>
  );
};

export default CopyableContent; 