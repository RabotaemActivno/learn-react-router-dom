import {useState, useEffect} from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BlogFilter } from '../components/BlogFilter'

interface Post {
    id: number,
    title: string
}

export function Blog () {

    const [posts, setPosts] = useState<Post[]>([])
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.has('latest')

    const startsForm = latest ? 80 : 1

    
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Blog</h1>
            <BlogFilter postQuery={postQuery}
            latest={latest}
            setSearchParams={setSearchParams}
            />
            <Link to='/posts/new'>Add new post</Link>
            {
                posts.filter(post=>post.title.includes(postQuery) && post.id>=startsForm).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}