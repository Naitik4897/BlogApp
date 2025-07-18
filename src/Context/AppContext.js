import { createContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {baseUrl} from "../baseUrl";

// step 1: create a context
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();
    
    // data filling function
    const fetchBlogPosts = useCallback(async (page = 1, tag= null, category) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(category) {
            url += `&category=${category}`;
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages); 
        }
        catch(error) {
            console.log("Error in fetching data:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }, []);

    function handlePageChange(page) {
        navigate({ search: `?page=${page}` });
        setPage(page);
    }
    
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
 }