'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './styles.css'; // Assuming you have a CSS file for styles
import { Instagram, Linkedin } from 'lucide-react';
import { AnimatedText } from '../Projects/Project';
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



    return (
        <section id='contact' className='w-full  flex flex-col xl:flex-row  h-[40vh] px-3 xl:justify-between xl:mt-70 mt-10'>
            <div className='flex h-full justify-between flex-col '>
                <div>
                    <AnimatedText>Ready to elevate</AnimatedText>
                    <AnimatedText> your brand?</AnimatedText>
                    <p className='mt-5 text-xl text-white/60'>Let’s design and build something great together.</p>
                </div>
                <div className='w-full xl:flex hidden gap-5 bottom-0  mt-5  '>
                    <Instagram size={40} color='white' />
                    <Linkedin size={40} color='white'/>


                </div>
            </div>
            <div className='flex xl:mt-0 mt-5 xl:w-1/2 w-full flex-col  '>

                <form id="contact-form" >
                    <div className="w-full xl:w-full grid grid-cols-2 grid-rows-4 gap-5">
                        {/* Name */}
                        <div className="xl:col-span-1 col-span-2">
                            <p className="text-white font-semibold">Name</p>
                            <input
                                className="outline-0 text-white inputCta w-full mt-1  p-2 rounded-md text-md font-light"
                                type="text"
                                name="name"
                                placeholder="Enter name"

                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="xl:col-span-1 col-span-2">
                            <p className="font-semibold">Email</p>
                            <input
                                className="outline-0 inputCta w-full flex text-start mt-1 text-white p-2 rounded-md text-md font-light"
                                type="email"
                                name="email"
                                placeholder="Enter Email"


                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="col-span-2 row-span-2">
                            <p className=" font-semibold">Message</p>
                            <textarea
                                className="w-full inputCta h-32 mt-3 text-white BG p-2 outline-0 rounded-md text-md font-light"
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