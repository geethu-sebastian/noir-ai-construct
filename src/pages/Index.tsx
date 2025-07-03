
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { WebsitePreview } from '@/components/WebsitePreview';

const Index = () => {
  const [currentPrompt, setCurrentPrompt] = useState('');

  const handleWebsiteGenerate = (prompt: string) => {
    setCurrentPrompt(prompt);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Panel */}
        <div className="w-1/2 flex flex-col">
          <ChatInterface onWebsiteGenerate={handleWebsiteGenerate} />
        </div>
        
        {/* Preview Panel */}
        <div className="w-1/2 flex flex-col">
          <WebsitePreview prompt={currentPrompt} />
        </div>
      </div>
    </div>
  );
};

export default Index;
