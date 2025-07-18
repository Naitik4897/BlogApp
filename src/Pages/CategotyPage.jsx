import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 pb-20 max-w-4xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        ← Back
                    </button>
                    <h2 className="text-3xl font-bold">
                        Blogs on <span className="text-gray-700">{category.replaceAll("-", " ")}</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center">
                    <Blogs />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;