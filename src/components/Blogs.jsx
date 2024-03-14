import axios from 'axios';
import { useEffect, useState } from 'react';
import Blog from './Blog';

export default function Blogs() {
    const [blogs, setBlogs] = useState();
    const sendRequest = async () => {
        const res = await axios.get('http://localhost:5000/api/blog').catch(err => console.log(err));
        const data = await res.data;
        return data;
    }

    useEffect(() => {

        sendRequest().then(data => setBlogs(data.blogs));

    }, []);
    console.log(blogs)


    return (
        <div><Blog /></div>
    )
}
