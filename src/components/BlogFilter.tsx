import { useState } from 'react'

export function BlogFilter({postQuery,latest,setSearchParams}:any) {
    const [search,setSearch] = useState(postQuery)
    const [checked,setChecked] = useState(latest)

    const handleSubmit = (e:any)=> {
        e.preventDefault()
        const form = e.target;

        const query = form.search.value
        const isLatest = form.latest.checked;

        const params: any = {}
        
        if(query.length) params.post = query
        if (isLatest) params.latest = true
        setSearchParams(params)
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input type="search" name='search' value={search} onChange={(e:any)=>setSearch(e.search.value)}/>
            <label style={{ padding: '0 1rem' }}> new only
                <input type="checkbox" name='latest' checked={checked} onChange={(e:any)=>setChecked(e.target.checked)}/>
            </label>
            <input type="submit" value='Search' />
        </form>
    )
}