import React from 'react'

const DataTable = ({dataUsers, sortBy}) => {
    console.log('dataUsers', dataUsers)
    return (
        <div>
            {/* {dataUsers.users && dataUsers.users.map(users => {
                return (<div> {users.name}</div>)
            })} */}
            <table>
                <thead>
                    <tr>
                        <th onClick={sortBy} value="name">Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {dataUsers.users && dataUsers.filteredUsers.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                
                })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
