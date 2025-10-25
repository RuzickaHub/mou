import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  readTime: number;
  image: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  category 
}) => {
  return (
    <article className="bg-slate-100 rounded-2xl p-6 shadow-[-8px_-8px_16px_rgba(255,255,255,0.8),8px_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 group">
      <div className="mb-4">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)]"
          loading="lazy"
        />
      </div>
      
      <div className="mb-3">
        <span className="inline-block bg-slate-100 px-3 py-1 rounded-lg text-xs font-medium text-indigo-600 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)]">
          {category}
        </span>
      </div>
      
      <h2 className="text-xl font-bold text-zinc-800 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
        {title}
      </h2>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{format(date, 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
      
      <Link 
        to={`/blog/${id}`}
        className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-indigo-600 shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        <span>Read More</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </article>
  );
};

export default BlogCard;