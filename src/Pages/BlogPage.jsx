import React, {useContext, useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

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

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        } 
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 pb-20 max-w-4xl mx-auto px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    ← Back
                </button>
                {
                    loading ?
                    (
                        <div className="flex flex-col items-center justify-center h-64">
                            <div className="loader mb-4"></div>
                            <p className="text-gray-600">Loading...</p>
                        </div>
                    ) :
                    blog ? (
                        <div className="space-y-8">
                            <BlogDetails post={blog} />
                            {relatedBlogs.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 text-center">Related Blogs</h2>
                                    <div className="space-y-6">
                                        {
                                            relatedBlogs.map((post) => (
                                                <div key={post.id} className="border-t pt-6">
                                                    <BlogDetails post={post} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                        </div>) :
                        (
                            <div className="flex flex-col items-center justify-center h-64">
                                <p className="text-xl text-gray-600">No Blog Found</p>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default BlogPage;