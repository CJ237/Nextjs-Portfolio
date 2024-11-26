"use client";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from "../../../utils/sendEmail";



const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted ] = useState(false);

    const { register, handleSubmit, reset} = useForm();
    const FormData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    function onSubmit(data) {
        sendEmail(data);
        setEmailSubmitted(true);
        reset();

    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2">

            </div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Looking forward to connecting!
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I’m currently seeking full stack developer positions where I can
                    contribute my skills and passion for creating impactful solutions.
                    With a drive to embrace new challenges and explore the unknown, I’m
                    always eager to start the next journey in my career. If you’re looking
                    for a dedicated and adaptable developer, feel free to email me or
                    connect with me on GitHub or Linkedin.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/CJ237">
                        <Image
                            src={"/images/github.png"}
                            alt="github"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/c-j-thompson-7451b8214">
                        <Image
                            src={"/images/linkedin.png"}
                            alt="github"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        type="text"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="bg-[#18191E] border w-full border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 "
                        
                        placeholder="Enter your name..."
                        {...register('name', { required: true })}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        type="email"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        Your email
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border w-full border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 "
                        
                        placeholder="email@email.com"
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        Subject
                    </label>
                    <input

                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33343F] w-full placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 "
                        placeholder="Hey everyone!"
                        {...register('subject', { required: true })}
                    />
                </div>
                <div className="mb-6 ">
                    <label
                        htmlFor="message"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="bg-[#18191E] border border-[#33343F] 
            placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full"
                        placeholder="Thanks for stopping by..."
                        {...register('message', { required: true })}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-gradient-to-br from-primary-500 to-secondary-500 rounded-md hover:bg-white hover:text-slate-800"
                >
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                    )
                }
            </form>
        </section>
    );
}

export default EmailSection;
