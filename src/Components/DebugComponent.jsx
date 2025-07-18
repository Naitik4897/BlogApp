import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';

const DebugComponent = () => {
    const { posts, loading, fetchBlogPosts } = useContext(AppContext);
    
    useEffect(() => {
        console.log('DebugComponent mounted');
        console.log('Posts:', posts);
        console.log('Loading:', loading);
        
        // Test API call
        fetchBlogPosts(1);
    }, [fetchBlogPosts, posts, loading]);
    
    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '20px' }}>
            <h2>Debug Info</h2>
            <p>Loading: {loading ? 'true' : 'false'}</p>
            <p>Posts count: {posts ? posts.length : 0}</p>
            <p>Context available: {fetchBlogPosts ? 'Yes' : 'No'}</p>
            <div>
                <h3>Posts:</h3>
                <pre>{JSON.stringify(posts, null, 2)}</pre>
            </div>
        </div>
    );
};

export default DebugComponent;
