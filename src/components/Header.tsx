'use client'

import Link from "next/link"
import { motion } from "framer-motion"

const links = [
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Proyects",
        hash: "#proyects"
    },
    {
        name: "Contact",
        hash: "#contact"
    }
]

export default function Header() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{
                duration: 1
            }}
        >
            <header className="text-lg sm:flex items-center justify-between py-12 sm:text-start text-center">
                    <div>
                        <Link href="/">
                            <p className="text-xl font-medium">bolg<span className="text-sky-500">dev</span></p>
                        </Link>
                    </div>
                    <nav>
                        <ul className="sm:flex items-center gap-6 hidden">
                            {links.map(link => (
                                <li key={link.hash}>
                                    <Link className="text-gray-200/90 hover:text-white/100 duration-200" href={link.hash}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
            </header>
        </motion.div>
    )
}