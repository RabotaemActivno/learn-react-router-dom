import {useLocation, useNavigate} from 'react-router-dom'
import { useAuth } from '../hook/useAuth';

export function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const {signin}=useAuth()

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const form = e.target
        const user = form.username.value

        signin(user, ()=> navigate(fromPage, {replace:true}))
    }


    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    name: <input name='username' />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}