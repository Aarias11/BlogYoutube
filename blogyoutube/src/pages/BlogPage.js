import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase'; // Assuming you have configured Firebase
import { doc, getDoc } from 'firebase/firestore';

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogDoc = await getDoc(doc(db, 'blogs', id));
                if (blogDoc.exists()) {
                    setBlog(blogDoc.data());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching the blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full h-screen p-10'>
            <h2 className='text-3xl text-center'>Blog Page</h2>
            <div className='mt-10'>
                <h4 className='text-2xl font-bold'>{blog.title}</h4>
                <h4 className='text-xl font-light mt-2'>By {blog.author}</h4>
                <p className='mt-4'>{blog.blogContent}</p>
            </div>
        </div>
    );
}

export default BlogPage;
