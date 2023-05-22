import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Post {
    id: number,
    title: string
}

export function Blog () {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Blog</h1>
            <Link to='/posts/new'>Add new post</Link>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}