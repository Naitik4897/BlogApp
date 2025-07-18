import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    // consume
    const {posts, loading} = useContext(AppContext);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {
                loading ? (
                    <div className="flex justify-center py-12">
                        <Spinner />
                    </div>
                ) : (
                    posts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center">
                            <div className="mb-4">
                                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">No Posts Found</h3>
                            <p className="text-gray-500 text-sm sm:text-base">There are no blog posts to display at the moment.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 sm:space-y-8">
                            {posts.map((post) => (
                                <BlogDetails key={post.id} post={post} />
                            ))}
                        </div>
                    )
                )
            }
        </div>
    );
};

export default Blogs;
