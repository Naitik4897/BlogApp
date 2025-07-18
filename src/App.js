import React, { useEffect, useContext } from 'react';
import { AppContext } from './Context/AppContext';
import './App.css';
import { Route, Routes, useSearchParams, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategotyPage';


export const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const location = useLocation(); 

  useEffect(() => {
    console.log("App useEffect triggered");
    console.log("Location pathname:", location.pathname);
    console.log("Location search:", location.search);
    
    const page = searchParams.get('page') ?? 1;
    console.log("Current page:", page);
    
    if(location.pathname.includes("tags")) {
      // iska matlab tag wala page show karna hai
      const tag = location.pathname.split('/').at(-1).replaceAll("-","");
      console.log("Fetching tag posts for:", tag);
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      // iska matlab category wala page show karna hai
      const category = location.pathname.split('/').at(-1).replaceAll("-","");
      console.log("Fetching category posts for:", category);
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      // iska matlab home page show karna hai
      console.log("Fetching home page posts");
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search, fetchBlogPosts, searchParams]);


  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/blog/:blogId' element = {<BlogPage />} />
      <Route path='/tags/:tag' element = {<TagPage />} />
      <Route path='/categories/:category' element = {<CategoryPage />} />
    </Routes>
  )
}

export default App;