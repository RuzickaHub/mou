import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-zinc-800 mb-4">NeuroMind</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exploring the intersection of technology, design, and human experience through thoughtful articles and insights.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-zinc-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-indigo-600 text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-indigo-600 text-sm transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-zinc-800 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-slate-100 p-3 rounded-xl shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.15)] transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-slate-400 hover:text-indigo-600 transition-colors duration-200" />
              </a>
              <a 
                href="#" 
                className="bg-slate-100 p-3 rounded-xl shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.15)] transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-slate-400 hover:text-indigo-600 transition-colors duration-200" />
              </a>
              <a 
                href="#" 
                className="bg-slate-100 p-3 rounded-xl shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.15)] transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-indigo-600 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 NeuroMind. All rights reserved. Built with ❤️ by{' '}
            <a 
              rel="nofollow" 
              target="_blank" 
              href="https://meku.dev"
              className="text-indigo-600 hover:text-blue-500 transition-colors duration-200"
            >
              Meku.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;