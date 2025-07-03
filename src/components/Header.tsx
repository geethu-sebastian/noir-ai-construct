
import React from 'react';
import { Sparkles, Github, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Builder</h1>
            <p className="text-sm text-gray-500">Chat & Build Websites</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white">
            New Project
          </Button>
        </div>
      </div>
    </header>
  );
};
