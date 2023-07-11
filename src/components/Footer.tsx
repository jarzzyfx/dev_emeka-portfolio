import Image from "next/image";
import Link from "next/link";
import {FC} from "react";

interface FooterProps {}

const Footer : FC<FooterProps> = () => {
    return(
        <div className="divide-x-[3px]  divide-gray-400  w-full pt-6 pb-6 sm:pr-20 sm:pl-20 pr-4 pl-4 flex justify-between ">
            <span className="w-full flex items-center text-xs sm:text-sm pr-2 font-light">All content on this website is protected by copyright. Copyright © 2023 dev_emeka. All rights reserved.
</span>
<span className="pl-2 w-full flex items-center justify-evenly text-sm font-light">
    Powered by
    <Link href='https://nextjs.org' className="flex p-1 hover:border-gray-400 border-transparent border-2  ">
    <Image alt="next image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={50} height={50}/>
    </Link>
    <Link href='https://react.dev' className="flex p-1 hover:border-gray-400 border-transparent border-2  ">
    <Image alt="react image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={50} height={50}/>
    </Link >
    <Link href='https://tailwindcss.com' className="flex p-1 hover:border-gray-400 border-transparent border-2  ">
    <Image alt="tailwind image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" width={50} height={50}/>
    </Link>
    <Link href='https://www.typescriptlang.org/' className="flex p-1 hover:border-gray-400 border-transparent border-2  ">
    <Image alt="ts image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width={50} height={50}/>
    </Link>
</span>
        </div>
    )
}

export default Footer