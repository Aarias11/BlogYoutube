import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Link } from "react-router-dom";

function Home() {
    const [blogs, setBlogs] = useState([])

    // fetch Blogs
    const fetchBlogs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'blogs'));
            const blogsList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setBlogs(blogsList);
            console.log(blogsList)
        } catch (error) {
            console.log('Unable to fetch Blogs')
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])


    
  return (
    <div className='w-full h-screen p-10'>
        <h1 className='text-3xl text-center'>Blogs</h1>
        {/* Render All Blogs */}
        <div className="w-full h-auto mt-10 flex flex-col gap-4">
            { blogs.map(blog => (
                <div key={blog.id} className="w-[600px] h-[100px] border rounded-xl shadow-md shadow-slate-200 p-4">
                    <Link to={`/blog/${blog.id}`} >
                    <h4 className="text-xl">Title: {blog.title}</h4>
                    <h4 className="text-xl font-light">Author: {blog.author}</h4>
                </Link>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Home