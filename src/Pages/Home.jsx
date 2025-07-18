import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import APITest from "../Components/APITest";

const Home = () => {
    const { loading, posts } = useContext(AppContext);
    
    console.log("Home component rendered");
    console.log("Loading state:", loading);
    console.log("Posts:", posts);
    
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 pb-20 flex flex-col items-center">
                <APITest />
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default Home;