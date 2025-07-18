import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    // consume
    const {posts, loading} = useContext(AppContext);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            {
                loading ? (<Spinner />) : (posts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64">
                        <p className="text-xl text-gray-600">No Posts Found</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <BlogDetails key={post.id} post={post} />
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;
