import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <NavLink to={`/blog/${post.id}`} className="block mb-3">
                <h2 className="font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors duration-200 line-clamp-2">
                    {post.title}
                </h2>
            </NavLink>
            
            <div className="text-sm text-gray-600 mb-2">
                By <span className="italic font-medium">{post.author}</span>
                {" on "}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className="underline font-semibold hover:text-gray-800 transition-colors duration-200">
                        {post.category}
                    </span>
                </NavLink>
            </div>
            
            <p className="text-sm text-gray-500 mb-4">Posted on {post.date}</p>
            
            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {post.content}
            </p>
            
            <div className="flex flex-wrap gap-2">
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
        </div>
    )
}

export default BlogDetails;