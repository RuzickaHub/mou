import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-slate-100 rounded-3xl p-12 shadow-[-12px_-12px_24px_rgba(255,255,255,0.8),12px_12px_24px_rgba(0,0,0,0.1)] mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-800 mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  NeuroMind
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Exploring the intersection of design, technology, and human experience through thoughtful articles and insights in neuromorphic design.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)]">
                    <Sparkles className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">50+</h3>
                <p className="text-slate-400">Articles Published</p>
              </div>
              
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)]">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">10K+</h3>
                <p className="text-slate-400">Monthly Readers</p>
              </div>
              
              <div className="bg-slate-100 rounded-2xl p-6 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)]">
                    <Users className="h-6 w-6 text-slate-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">5K+</h3>
                <p className="text-slate-400">Community Members</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Discover insights, tutorials, and thoughts on neuromorphic design and modern web development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.image}
                  category={post.category}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;