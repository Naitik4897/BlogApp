import React from "react";
import { NavLink } from "react-router-dom";

const FullBlogDetails = ({ post }) => {
    return (
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Blog Header */}
            <div className="p-6 sm:p-8 md:p-10">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    {post.title}
                </h1>
                
                {/* Meta Information */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 text-sm text-gray-600 border-b border-gray-200 pb-4 sm:pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
                        <p>
                            By <span className="font-semibold text-gray-800">{post.author}</span>
                        </p>
                        <span className="hidden sm:inline text-gray-400">•</span>
                        <p className="text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                    <NavLink 
                        to={`/categories/${post.category.replaceAll(" ", "-")}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
                    >
                        {post.category}
                    </NavLink>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {post.tags.map((tag, index) => (
                        <NavLink 
                            to={`/tags/${tag.replaceAll(" ", "-")}`} 
                            key={index}
                            className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        >
                            #{tag}
                        </NavLink>
                    ))}
                </div>

                {/* Full Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm sm:text-base md:text-lg">
                        {post.content}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FullBlogDetails;
