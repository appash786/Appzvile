"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const nav = [
    { 'text': 'home', 'route': '/admin' },
    { 'text': 'messages', 'route': '/admin/messages' },
    { 'text': 'dashboard', 'route': '/admin' },
  ]
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <header className="w-full flex justify-center h-[30vh] items-center  ">
          <h3 className="text-white text-3xl">Hi appash</h3>
        </header>
        <aside className="px-4">
          <nav>
            <ul className="text-white flex gap-3">
              {nav.map((item, i) => (
                <li key={i}>
                  <Link href={item.route} >
                    <div className="px-3 py-1 rounded-md border-1">
                <p>{item.text}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="w-full mt-5 h-screen ">
          {children}

        </main>



      </body>
    </html>

  );
}
