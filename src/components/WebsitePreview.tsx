import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Code, ExternalLink, Sparkles, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WebsitePreviewProps {
  prompt: string;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({ prompt }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showCode, setShowCode] = useState(false);
  const [websiteContent, setWebsiteContent] = useState<string>('');

  useEffect(() => {
    if (prompt) {
      generateWebsiteContent(prompt);
    }
  }, [prompt]);

  const generateWebsiteContent = (userPrompt: string) => {
    // Simple AI-like website generation based on prompt keywords
    const isPortfolio = userPrompt.toLowerCase().includes('portfolio');
    const isBusiness = userPrompt.toLowerCase().includes('business') || userPrompt.toLowerCase().includes('company');
    const isLanding = userPrompt.toLowerCase().includes('landing');

    let content = '';

    if (isPortfolio) {
      content = `
        <div class="min-h-screen bg-white">
          <nav class="bg-white border-b border-gray-200 px-6 py-4">
            <div class="max-w-6xl mx-auto flex justify-between items-center">
              <h1 class="text-xl font-bold text-gray-900">John Designer</h1>
              <div class="flex gap-6">
                <a href="#" class="text-gray-600 hover:text-gray-900">Work</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </nav>
          
          <section class="max-w-6xl mx-auto px-6 py-20">
            <div class="text-center">
              <h2 class="text-5xl font-bold text-gray-900 mb-6">Creative Designer & Developer</h2>
              <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">I create beautiful digital experiences that combine thoughtful design with clean code.</p>
              <button class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">View My Work</button>
            </div>
          </section>
          
          <section class="max-w-6xl mx-auto px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <span class="text-gray-500">Project 1</span>
              </div>
              <div class="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <span class="text-gray-500">Project 2</span>
              </div>
              <div class="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <span class="text-gray-500">Project 3</span>
              </div>
            </div>
          </section>
        </div>
      `;
    } else if (isBusiness) {
      content = `
        <div class="min-h-screen bg-white">
          <nav class="bg-white border-b border-gray-200 px-6 py-4">
            <div class="max-w-6xl mx-auto flex justify-between items-center">
              <h1 class="text-xl font-bold text-gray-900">BusinessCorp</h1>
              <div class="flex gap-6">
                <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </nav>
          
          <section class="max-w-6xl mx-auto px-6 py-20">
            <div class="text-center">
              <h2 class="text-5xl font-bold text-gray-900 mb-6">Growing Businesses Forward</h2>
              <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">We help companies scale with innovative solutions and strategic guidance.</p>
              <button class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors mr-4">Get Started</button>
              <button class="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">Learn More</button>
            </div>
          </section>
          
          <section class="bg-gray-50 py-20">
            <div class="max-w-6xl mx-auto px-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-black rounded-lg mx-auto mb-4"></div>
                  <h3 class="text-xl font-semibold mb-2">Strategy</h3>
                  <p class="text-gray-600">Strategic planning and market analysis</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-black rounded-lg mx-auto mb-4"></div>
                  <h3 class="text-xl font-semibold mb-2">Growth</h3>
                  <p class="text-gray-600">Scalable solutions for rapid expansion</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-black rounded-lg mx-auto mb-4"></div>
                  <h3 class="text-xl font-semibold mb-2">Support</h3>
                  <p class="text-gray-600">24/7 customer support and guidance</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    } else {
      content = `
        <div class="min-h-screen bg-white">
          <nav class="bg-white border-b border-gray-200 px-6 py-4">
            <div class="max-w-6xl mx-auto flex justify-between items-center">
              <h1 class="text-xl font-bold text-gray-900">Modern Site</h1>
              <div class="flex gap-6">
                <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </nav>
          
          <section class="max-w-6xl mx-auto px-6 py-20">
            <div class="text-center">
              <h2 class="text-5xl font-bold text-gray-900 mb-6">Beautiful. Simple. Effective.</h2>
              <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Experience the perfect blend of design and functionality in our modern web solution.</p>
              <button class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">Get Started</button>
            </div>
          </section>
          
          <section class="py-20">
            <div class="max-w-6xl mx-auto px-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 mb-4">Clean & Modern Design</h3>
                  <p class="text-gray-600 mb-6">Every element is carefully crafted to provide the best user experience possible.</p>
                  <button class="text-black font-medium hover:underline">Learn more →</button>
                </div>
                <div class="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                  <span class="text-gray-500">Feature Preview</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    }

    setWebsiteContent(content);
  };

  const getContainerClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'w-80 mx-auto border border-gray-300 rounded-lg overflow-hidden';
      case 'tablet':
        return 'w-[768px] mx-auto border border-gray-300 rounded-lg overflow-hidden';
      case 'desktop':
      default:
        return 'w-full border border-gray-200 rounded-lg overflow-hidden';
    }
  };

  const getIframeHeight = () => {
    switch (viewMode) {
      case 'mobile':
        return '600px';
      case 'tablet':
        return '800px';
      case 'desktop':
      default:
        return '600px';
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Website Preview</h3>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'desktop' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('desktop')}
            className={viewMode === 'desktop' ? 'bg-black text-white' : ''}
          >
            <Monitor className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'tablet' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('tablet')}
            className={viewMode === 'tablet' ? 'bg-black text-white' : ''}
          >
            <Tablet className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'mobile' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('mobile')}
            className={viewMode === 'mobile' ? 'bg-black text-white' : ''}
          >
            <Smartphone className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
          >
            <Code className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto">
        {showCode ? (
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto">
            <pre>{websiteContent || '// Your generated website code will appear here...'}</pre>
          </div>
        ) : (
          <div className={getContainerClass()}>
            <div className="bg-white">
              {websiteContent ? (
                <iframe
                  srcDoc={websiteContent}
                  className="w-full"
                  style={{ height: getIframeHeight() }}
                />
              ) : (
                <div className="flex items-center justify-center h-96 bg-gray-100">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Start chatting to generate your website!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
