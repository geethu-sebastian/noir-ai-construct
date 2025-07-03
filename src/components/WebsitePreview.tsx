
import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, RefreshCw, ExternalLink, Code, Sparkles } from 'lucide-react';

interface WebsitePreviewProps {
  prompt: string;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({ prompt }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [websiteContent, setWebsiteContent] = useState<string>('');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    if (prompt) {
      generateWebsiteContent(prompt);
      setLastUpdated(new Date().toLocaleTimeString());
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

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 500);
  };

  const getPreviewStyles = () => {
    switch (deviceView) {
      case 'mobile':
        return 'w-[375px] h-[667px]';
      case 'tablet':
        return 'w-[768px] h-[600px]';
      default:
        return 'w-full h-full';
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white">Live Preview</h3>
            <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Device Toggle */}
            <div className="flex items-center bg-slate-800/50 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-2 rounded transition-all duration-200 ${
                  deviceView === 'desktop' 
                    ? 'bg-white text-slate-800 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-2 rounded transition-all duration-200 ${
                  deviceView === 'tablet' 
                    ? 'bg-white text-slate-800 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-2 rounded transition-all duration-200 ${
                  deviceView === 'mobile' 
                    ? 'bg-white text-slate-800 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
            
            {/* Code Toggle */}
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-2 rounded transition-colors ${showCode ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
              title="Toggle Code View"
            >
              <Code className="w-4 h-4" />
            </button>
            
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Refresh Preview"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            
            {/* External Link */}
            <button
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 p-4 flex items-center justify-center overflow-auto">
        {showCode ? (
          <div className="w-full h-full bg-gray-900/80 backdrop-blur-sm text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto border border-white/10">
            <pre className="whitespace-pre-wrap">{websiteContent || '// Your generated website code will appear here...'}</pre>
          </div>
        ) : (
          <div className={`${getPreviewStyles()} transition-all duration-300 ${deviceView !== 'desktop' ? 'border border-white/20 rounded-lg overflow-hidden shadow-2xl' : ''}`}>
            {websiteContent ? (
              <iframe
                srcDoc={websiteContent}
                className="w-full h-full border-0 bg-white rounded-lg"
                sandbox="allow-scripts allow-same-origin"
                title="Website Preview"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Start chatting to generate your website!</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="p-3 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span>Ready</span>
            <span>•</span>
            <span className="capitalize">{deviceView} View</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Auto-refresh: On</span>
            <span>•</span>
            <span>Last updated: {lastUpdated || new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
