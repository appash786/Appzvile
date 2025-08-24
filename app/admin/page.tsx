import { div, section } from 'motion/react-client';
import React from 'react'


export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}
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
        <section className='px-5 w-full  '>
            <div  className='bg-amber-50 w-40 h-40 flex justify-center items-center rounded-2xl' >
                <h4 className='text-2xl'>Home</h4>
            </div>

        </section>



    )
}

export default page