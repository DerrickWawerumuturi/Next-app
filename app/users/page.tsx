import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
   const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'})
   const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
               {users.map(user => 
               <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
               </tr>)} 
            </tbody>      
        </table>
    </>
    
    )
}

export default UsersPage