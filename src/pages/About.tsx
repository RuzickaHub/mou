import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-slate-100 rounded-3xl p-12 shadow-[-12px_-12px_24px_rgba(255,255,255,0.8),12px_12px_24px_rgba(0,0,0,0.1)]">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-6">
                About NeuroMind
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                We're passionate about exploring the intersection of design, technology, and human psychology through the lens of neuromorphic design principles.
              </p>
            </div>
          </div>
          
          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-slate-100 rounded-2xl p-8 shadow-[-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_16px_rgba(0,0,0,0.1)]">
              <div className="flex items-center mb-6">
                <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] mr-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-800">Our Mission</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At NeuroMind, we believe that great design should feel natural and intuitive. Our mission is to explore, document, and share insights about neuromorphic design - a design philosophy that creates digital interfaces with the soft, organic feel of physical objects. We're committed to making design knowledge accessible to everyone, from beginners to seasoned professionals.
              </p>
            </div>
          </section>
          
          {/* Values Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-zinc-800 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] mr-4">
                    <Heart className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">Accessibility First</h3>
                </div>
                <p className="text-slate-600">
                  We believe beautiful design should be inclusive. Every article and tutorial emphasizes accessibility best practices to ensure neuromorphic design works for everyone.
                </p>
              </div>
              
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] mr-4">
                    <Lightbulb className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">Innovation</h3>
                </div>
                <p className="text-slate-600">
                  We're constantly exploring new techniques, tools, and approaches to push the boundaries of what's possible with neuromorphic design.
                </p>
              </div>
              
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] mr-4">
                    <Users className="h-6 w-6 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">Community</h3>
                </div>
                <p className="text-slate-600">
                  Design is better when we learn together. We foster a supportive community where designers and developers can share knowledge and grow.
                </p>
              </div>
              
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] mr-4">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">Quality</h3>
                </div>
                <p className="text-slate-600">
                  Every piece of content is carefully researched, tested, and refined to provide the most valuable and accurate information possible.
                </p>
              </div>
            </div>
          </section>
          
          {/* Story Section */}
          <section className="mb-16">
            <div className="bg-slate-100 rounded-2xl p-8 shadow-[-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_16px_rgba(0,0,0,0.1)]">
              <h2 className="text-2xl font-bold text-zinc-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  NeuroMind was born from a simple observation: while flat design dominated the digital landscape for years, there was something missing - the tactile, intuitive feel of physical objects that humans naturally understand.
                </p>
                <p>
                  As neuromorphic design began to emerge, we saw an opportunity to not just follow the trend, but to deeply understand the psychology, accessibility implications, and technical challenges of this new design paradigm. We wanted to create a resource that would help designers and developers implement neuromorphic design thoughtfully and effectively.
                </p>
                <p>
                  Today, NeuroMind serves thousands of designers, developers, and design enthusiasts who are passionate about creating more human-centered digital experiences. Our community continues to grow as we explore new frontiers in soft UI design, always with accessibility and user experience at the forefront.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;