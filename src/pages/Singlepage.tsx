import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
}

export function Singlepage() {
    const { id } = useParams()
    

    const [post, setPosts] = useState<Post | null>(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id])

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    )
}