import React, { useEffect, useState } from 'react'
import List from './List'

function App () {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => {
            setLoading(false)
            setUsers(data)
        })
    },[])
    return <>
        <div>
            <List loading={loading} users={users}/>
        </div>
    </>
}

export default App