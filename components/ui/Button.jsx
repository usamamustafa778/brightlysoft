import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

export default function Button({ href, text,className }) {
    return (
        <Link href={href} className={`flex text-sm items-center gap-2 mt-8 py-2 hover:text-yellow-400 text-white font-medium transition ${className}`}>
            {text}
            <div className="ml-2 w-10 h-10 flex items-center justify-center border border-white/20 rounded-full">
                <span className="text-xl"><ChevronRightIcon className="w-4 h-4" /></span>
            </div>
        </Link>
    )
}
