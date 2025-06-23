import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-white flex items-center justify-between border-t bg-[#373435]">
            {/* <Link href="/" className="font-bold text-xl">JPES</Link> */}
            <Link href="/" className='bg-white p-4 rounded-full'>
                <Image src='/Juhu_Parle_Education_Society.png' alt="JPES-LOGO" width={50} height={50} />
            </Link>
            <Image src="/logo-base-2022-23-768x80.jpg" alt="Footer-Logo" width={600} height={50} />
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer