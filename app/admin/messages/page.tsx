import { div, section } from 'motion/react-client'
import React from 'react'

const page = () => {
    const users = [
        { id: 1, name: "User1", createdAt: "2025-08-14T17:20:00Z" }, // 10 days ago
        { id: 2, name: "User2", createdAt: "2025-08-15T17:20:00Z" }, // 9 days ago
        { id: 3, name: "User3", createdAt: "2025-08-16T17:20:00Z" }, // 8 days ago
        { id: 4, name: "User4", createdAt: "2025-08-17T17:20:00Z" }, // 7 days ago
        { id: 5, name: "User5", createdAt: "2025-08-18T17:20:00Z" }, // 6 days ago
        { id: 6, name: "User6", createdAt: "2025-08-19T17:20:00Z" }, // 5 days ago
        { id: 7, name: "User7", createdAt: "2025-08-20T17:20:00Z" }, // 4 days ago
        { id: 8, name: "User8", createdAt: "2025-08-21T17:20:00Z" }, // 3 days ago
        { id: 9, name: "User9", createdAt: "2025-08-22T17:20:00Z" }, // 2 days ago
        { id: 10, name: "User10", createdAt: "2025-08-23T17:20:00Z" } // 1 day ago
    ];

    return (
        <section className='p-4 w-full h-full'>
            <div className='w-full h-full flex flex-col gap-2 '>
                {users.map((user, i) => (
                    <div key={i} className='w-full flex justify-between bg-amber-50 text-white p-4 rounded-xl '>
                        <h4 className='text-black'>{user.name}</h4>

                        <p className='text-black'>{user.createdAt}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default page