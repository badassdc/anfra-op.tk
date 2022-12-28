import { Transition } from "@headlessui/react";
import Button from "components/Global/Button";
import useSWR from "hooks/swr";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState } from "react";
import config from "../../../site.config.js";
import { motion } from "framer-motion"

export default function Footer() {
    const router = useRouter();
    let [heartColor, setHeartColor] = useState('#FF0000');

    const socials = [
        {
            name: "Twitter",
            href: config.social.twitter,
            icon: "fab fa-twitter",
        },
        {
            name: "Discord",
            href: config.social.discord,
            icon: "fab fa-discord",
        },
        {
            name: "Github",
            href: config.social.github,
            icon: "fab fa-github",
        },
    ];

    return <>
        <footer>
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10 padding">
                <div className="mt-1 flex justify-center space-x-6">
                    {socials.map((social) => (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                        <a
                            key={social.name}
                            onClick={() => router.push(social.href)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                            href={social.href}
                        >
                            <span className="sr-only">{social.name}</span>
                            <i className={social.icon}></i>
                        </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center space-x-6 md:space-x-6">
                    <Link href="/privacy">
                        <a className="text-base text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 hover:underline hover:underline-offset-8 hover:underline-white button button-text">
                            Privacy Policy
                        </a>
                    </Link>
                    <Link href="/terms">
                        <a className="text-base text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 hover:underline hover:underline-offset-8 hover:underline-white button button-text">
                            Terms of Service
                        </a>
                    </Link>
                </div>
                 <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-4 md:mt-1">
                  <p className="text-lg text-zinc-400">© 2018 - {new Date().getFullYear()} {config.siteMetadata.author}. All rights reserved.</p>
                   {/*
                   
                   Dont touch this!
                   
                   */}
                   <div className="text-right">
                   <motion.div whileHover={{ scale: 1.05 }}> <p className="text-lg text-zinc-400 select-none">Designed with <i className="fas fa-heart" style={{ color: heartColor, cursor: 'pointer' }} /> by <button onClick={() => router.push('')} className="text-zinc-400 hover:text-primary hover:dark:text-white button" href=""><motion.div whileTap={{ scale: 0.95 }}>JanjyTapYT & YashJ-</motion.div></button></p></motion.div>
                </div>
                  {/*
                  
                   Dont touch this!
                   
                   */}
            </div>
        </div>
            </div>
        </footer>
    </>;
}
