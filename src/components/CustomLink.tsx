import { match } from 'assert'
import {Link, useMatch} from 'react-router-dom'

export function CustomLink({children, to, ...props}: any) {

    const match = useMatch(to)

    return (
        <Link 
                to={to} 
                {...props}
                style={{
                    color: match ? 'var(--link-active)': 'white',
                }}>
            {children}
        </Link>
    )
}