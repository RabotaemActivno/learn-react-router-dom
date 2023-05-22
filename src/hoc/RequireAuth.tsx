import {useLocation, Navigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export function RequireAuth({children}:any) {
    const location = useLocation()
    const {user} = useAuth()

    if(!user) {
        return <Navigate to ='/login' state={{from: location}}/>
    }

    return children
}