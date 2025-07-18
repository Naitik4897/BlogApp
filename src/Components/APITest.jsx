import React, { useState, useEffect } from 'react';

const APITest = () => {
    const [testResult, setTestResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const testAPI = async () => {
        setLoading(true);
        setError(null);
        
        try {
            console.log("Testing API...");
            const response = await fetch("https://codehelp-apis.vercel.app/api/get-blogs?page=1");
            console.log("Response status:", response.status);
            console.log("Response ok:", response.ok);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log("API Data:", data);
            setTestResult(data);
        } catch (err) {
            console.error("API Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        testAPI();
    }, []);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
            <h2>API Test Component</h2>
            <button onClick={testAPI} disabled={loading}>
                {loading ? 'Testing...' : 'Test API'}
            </button>
            
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {testResult && (
                <div>
                    <h3>API Response:</h3>
                    <p>Page: {testResult.page}</p>
                    <p>Total Pages: {testResult.totalPages}</p>
                    <p>Posts Count: {testResult.posts ? testResult.posts.length : 0}</p>
                    <details>
                        <summary>Full Response</summary>
                        <pre>{JSON.stringify(testResult, null, 2)}</pre>
                    </details>
                </div>
            )}
        </div>
    );
};

export default APITest;
