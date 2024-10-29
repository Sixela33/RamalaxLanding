import React from 'react';
import { FileText } from 'lucide-react';

interface ResourceButtonProps {
  title: string;
  description: string;
  href: string;
}

export function ResourceButton({ title, description, href }: ResourceButtonProps) {
  return (
    <a 
      href={href}
      className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-transparent border border-green-900/50 hover:border-green-500/50 transition-all group"
    >
      <FileText className="w-6 h-6 text-green-400 mt-1" />
      <div>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-green-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </a>
  );
}