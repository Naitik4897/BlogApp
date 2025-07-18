import React, {useContext, useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";
import FullBlogDetails from "../Components/FullBlogDetails";

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

    useEffect(() => {
        async function fetchRelatedBlogs() {
            setLoading(true);
            let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                setBlog(data.blog);
                setRelatedBlogs(data.relatedBlogs);
            }
            catch(error) {
                console.log("Error fetching blog data", error);
                setBlog(null);
                setRelatedBlogs([]);
            }
            setLoading(false);
        }

        if(blogId){
            fetchRelatedBlogs();
        } 
    }, [location.pathname, blogId, setLoading]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-16 sm:pt-20 pb-12 sm:pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 sm:mb-8 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base flex items-center gap-2"
                    >
                        <span>←</span>
                        <span className="hidden sm:inline">Back</span>
                    </button>
                    
                    {/* Main Content */}
                    {
                        loading ? (
                            <div className="flex flex-col items-center justify-center h-64">
                                <div className="loader mb-4"></div>
                                <p className="text-gray-600">Loading...</p>
                            </div>
                        ) :
                        blog ? (
                            <div className="space-y-8 sm:space-y-12">
                                {/* Full Blog Content */}
                                <FullBlogDetails post={blog} />
                                
                                {/* Related Blogs Section */}
                                {relatedBlogs.length > 0 && (
                                    <div className="mt-12 sm:mt-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">
                                            Related Articles
                                        </h2>
                                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-1">
                                            {relatedBlogs.map((post) => (
                                                <div key={post.id} className="border-t pt-6 sm:pt-8">
                                                    <BlogDetails post={post} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64">
                                <div className="text-center">
                                    <h2 className="text-xl sm:text-2xl text-gray-600 mb-2">No Blog Found</h2>
                                    <p className="text-gray-500 text-sm sm:text-base">The blog post you're looking for doesn't exist.</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage;