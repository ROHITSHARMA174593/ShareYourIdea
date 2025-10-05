import { auth, signIn, signOut } from '@/auth' 
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async() => {

    const session = await auth();

  return (
    <header className='px-10 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href={"/"}>
                <Image src="/projecthub.webp" alt='logo' width={145} height={40}/>
            </Link>
            <div className='flex items-center gap-5 text-black'>
                {session && session?.user ? (
                    <>
                        <Link href={"/project/create"}>
                            <span className='text-2xl font-sans max-sm:hidden'>Create</span>
                        </Link>     
                        <form action={async () => {
                            "use server"
                            await signOut({redirectTo : "/"})
                        }}>
                        <button type='submit' className='text-2xl  rounded-xl'>Logout</button>
                    </form>
                        <Link href={`/user/${session?.user.id}`}> {/* Question mark ka mtlb hai agar username me null aaya to app crash nahi hogi ye undefined return kar dega jisse app crash nahi hogi */}
                            <span className='text-2xl font-sans max-sm:hidden border border-black-200 px-4 py-[6px] rounded-full bg-gray-600 text-white font-medium'>
                                {session.user?.name?.slice(0,1).toLocaleUpperCase()}
                            </span>
                        </Link>
                    </>
                ) : (
                    <form action={async () => {
                        "use server"
                        await signIn('github')
                    }}>
                        <button type='submit' className='text-2xl font-bold border border-black-200 px-5 py-3 rounded-xl'>Login</button>
                    </form>
                )
                }

                     
            </div>
        </nav>
        
    </header>
  )
}

export default Navbar