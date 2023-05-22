import { NavLink, Outlet } from 'react-router-dom'
import '../index.css'

const setActive = ({isActive}:any)=>isActive ? 'active-link' : 'link'

export function Layout() {
    return (
        <>
        <header>
            <NavLink to="/" className={setActive}>Home</NavLink>
            <NavLink to="/posts" className={setActive}>Blog</NavLink>
            <NavLink to="/about" className={setActive}>About</NavLink>
        </header>
        <main className='container'>
            <Outlet/>
        </main>
        <footer className='container'>2023</footer>
        </>
    )
}