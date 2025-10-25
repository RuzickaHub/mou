import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Header />
        <main className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-100 rounded-2xl p-12 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.7),inset_8px_8px_16px_rgba(0,0,0,0.15)]">
              <h1 className="text-2xl font-bold text-zinc-800 mb-4">Article Not Found</h1>
              <p className="text-slate-400 mb-6">The article you're looking for doesn't exist.</p>
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-xl text-sm font-medium text-indigo-600 shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-indigo-600 shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Articles</span>
            </Link>
          </div>
          
          {/* Article Header */}
          <article className="bg-slate-100 rounded-2xl p-8 md:p-12 shadow-[-12px_-12px_24px_rgba(255,255,255,0.8),12px_12px_24px_rgba(0,0,0,0.1)]">
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block bg-slate-100 px-3 py-1 rounded-lg text-xs font-medium text-indigo-600 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)]">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{format(post.date, 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              
              <div className="mb-8">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)]"
                />
              </div>
            </header>
            
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-zinc-800 prose-headings:text-zinc-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-slate-600 prose-li:mb-2 prose-strong:text-zinc-800 prose-code:bg-slate-200 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-slate-200 prose-pre:p-4 prose-pre:rounded-xl prose-pre:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
          
          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-zinc-800 mb-8 text-center">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="block bg-slate-100 rounded-2xl p-6 shadow-[-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  >
                    <img 
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover rounded-xl mb-4 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)]"
                    />
                    <h3 className="font-bold text-zinc-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;