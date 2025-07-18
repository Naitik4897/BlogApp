import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
            <NavLink to={`/blog/${post.id}`} className="block mb-3">
                <h2 className="font-bold text-lg sm:text-xl text-gray-900 hover:text-gray-700 transition-colors duration-200 line-clamp-2 leading-tight">
                    {post.title}
                </h2>
            </NavLink>
            
            <div className="text-xs sm:text-sm text-gray-600 mb-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span>By <span className="italic font-medium">{post.author}</span></span>
                <span className="hidden sm:inline text-gray-400">•</span>
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className="underline font-semibold hover:text-gray-800 transition-colors duration-200">
                        {post.category}
                    </span>
                </NavLink>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
                Posted on {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3 text-sm sm:text-base">
                {post.content}
            </p>
            
            <div className="flex flex-wrap gap-1 sm:gap-2">
                {
                    post.tags.map((tag, index) => (
                        <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200">
                                #{tag}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            
            {/* Read More Link */}
            <div className="mt-4 pt-4 border-t border-gray-100">
                <NavLink 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                >
                    Read More →
                </NavLink>
            </div>
        </div>
    )
}

export default BlogDetails;