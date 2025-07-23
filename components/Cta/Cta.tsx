'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './styles.css'; // Assuming you have a CSS file for styles
import { Instagram, Linkedin } from 'lucide-react';
const Cta = () => {
    const [image, setImage] = useState<File | null>(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "User",

    })
    const onChangeHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))

    }
    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);



        formData.append('image', image); // ✅ only append if it's not null

        const respone = await axios.post('/api/blog/', formData);
        if (respone.data.success) {
            toast.success(respone.data.msg);
            setImage(null);
            setData({
                title: "",
                description: "",
                category: "Startup",
                author: "User"
            })
        }
        else {
            toast.error("Error")
        }

    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();

                if (res.ok) {
                    setData((prev) => ({
                        ...prev,
                        author: data.username || data.email || "User",
                    }));
                } else {
                    console.warn("User fetch failed:", data.error);
                }
            } catch (err) {
                console.error("Fetch user error", err);
            }
        };

        fetchUser();
    }, []);
    return (
        <section className='w-full flex  h-[40vh]  justify-between mt-70'>
            <div className='flex h-full justify-between flex-col '>
                <div>
                    <h3 className='text-6xl '>Ready to <br /> elevate your brand?</h3>
                    <p className='mt-5 text-xl text-white/60'>Let’s design and build something great together.</p>
                </div>
                <div className='w-full gap-5 bottom-0  mt-5 flex '>
                    <Instagram size={40} />
                    <Linkedin size={40}/>


                </div>
            </div>
            <div className='flex w-1/2 flex-col  '>

                <form id="contact-form" >
                    <div className="w-full xl:w-full grid grid-cols-2 grid-rows-4 gap-5">
                        {/* Name */}
                        <div className="xl:col-span-1 col-span-2">
                            <p className="SecondColor font-semibold">Name</p>
                            <input
                                className="outline-0 inputCta w-full mt-1 SecondColorBG p-2 rounded-md text-md font-light"
                                type="text"
                                name="name"
                                placeholder="Enter name"

                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="xl:col-span-1 col-span-2">
                            <p className="SecondColor font-semibold">Email</p>
                            <input
                                className="outline-0 inputCta w-full flex text-start mt-1 SecondColorBG p-2 rounded-md text-md font-light"
                                type="email"
                                name="email"
                                placeholder="Enter Email"


                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="col-span-2 row-span-2">
                            <p className="SecondColor font-semibold">Message</p>
                            <textarea
                                className="w-full inputCta h-32 mt-3 SecondColorBG p-2 outline-0 rounded-md text-md font-light"
                                name="message"
                                placeholder="Enter your message"


                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2 pt-">
                            <button
                                type="submit"
                                className="w-full p-4 rounded-md text-xl bg-[#6900cd] text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Cta