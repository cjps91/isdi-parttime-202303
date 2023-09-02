"use client";

import { FormEvent } from 'react'
import { postMessage } from '@/utils';

const ContactForm = () => {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const target = event.target as typeof event.target & {
            title: { value: string }
            name: { value: string }
            email: { value: string }
            message: { value: string }
        }


        const title = target.title.value;
        const name = target.name.value;
        const email = target.email.value;
        const message = target.message.value;
        //console.log(`${title} ${name} ${email} ${message}`);

        await postMessage(name, title, email, message);
    }
    return (
        <div className="max-w-[1440px] w-full flex flex-col">
            <div className="flex flex-col content-center">
                <h1 className="font-bold justify-self-center text-2xl p-4 bg-blue-100">Contact Me</h1>
                <div className='p-8 justify-center items-center h-fit w-auto flex'>
                    <form className='flex flex-col gap-6 w-full justify-center justify-items-center' onSubmit={onSubmit}>
                        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 title' id='title' type='text' aria-label='name' placeholder='Title' />
                        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 name' id='name' type='text' aria-label='name' placeholder='Name' />
                        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 email' id='email' type='email' aria-label='email address' placeholder='Email' />
                        <textarea className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 message' id='message' aria-label='message' placeholder='Message' />
                        <button className='bg-slate-700 hover:bg-blue-100 duration-300 text-white hover:text-black shadow p-2 rounded-md sm:w-52' type='submit'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
