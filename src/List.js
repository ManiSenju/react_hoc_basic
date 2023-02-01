import React from 'react'
import withLoadingHOC from './withLoadingHOC'

function List ({users}) {
    return (<ul>
        {users.map(user => {
            return (<li key={user.id}>
                <p>name: ${user.name}</p>
                <p>email: ${user.email}</p>
                <p>website: ${user.website}</p>
            </li>)
        })}
    </ul>) 
}

export default withLoadingHOC(List)