import React, { useState, useEffect } from 'react'
import { db } from "../firebase";
import { collection, addDoc, getDocs, query } from "firebase/firestore";

function CreateBlog() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('')

    // Handle Submit Form

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'blogs'), {
                author,
                title,
                blogContent
            });
            setAuthor('')
            setTitle('')
            setBlogContent('')
            alert('Blog Successfully Saved')
        } catch (error) {
            alert('Unable to save blog:', error)
        }
    }


  return (
    <div className='w-full h-screen p-10 flex flex-col items-center'>
        <h2 className='text-3xl text-center'>Create a Blog</h2>
        {/* Form */}
        <form className='flex flex-col gap-3 pt-10'
        onSubmit={handleSubmit}>
            {/* Author */}
            <div className='flex flex-col'>
                <label>Author</label>
                <input className='w-[700px] h-[50px] border rounded-lg pl-4'
                type='text'
                value={author}
                onChange={(e) => setAuthor(e.target.value)} />
            </div>
            {/* Title */}
            <div className='flex flex-col'>
                <label>Title</label>
                <input className='w-[700px] h-[50px] border rounded-lg pl-4'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            {/* Blog Content */}
            <div className='flex flex-col'>
                <label>Blog</label>
                <textarea className='w-[700px] h-[200px] border rounded-lg p-4'
                type='text'
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)} />
            </div>
            {/* Button */}
            <button className='w-[300px] h-[50px] border rounded-lg hover:bg-teal-800 hover:text-white'
            type='submit'>Submit Blog</button>
        </form>
    </div>
  )
}

export default CreateBlog