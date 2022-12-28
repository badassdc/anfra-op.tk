import { Transition } from "@headlessui/react";
import Button from "components/Global/Button";
import { useTheme } from "../../context/theme.js";
import useSWR from "hooks/swr";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState } from "react";
import config from "../../../site.config.js";
import { motion } from "framer-motion"

export default function Header() {
    const pages = config.pages;

    const { isTheme, toggleTheme } = useTheme();

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                 <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                        <Link href="/">
                        <img style={{ zIndex: 0 }} className="h-10 w-auto sm:h-12 cursor-pointer rounded-full shadow-2xl shadow-primary transparent-background" src={config.siteMetadata.logo} alt="" />
                        </Link>
                        </div>
                     <Link href="/">
                         <a className="text-2xl font-bold transition-all duration-200 button-text shadow-2xl shadow-primary bg-none">{config.siteMetadata.author}</a>
                     </Link>
                 </div>
                    <motion.div
                   whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                     >
                   <div className="-mr-2 md:hidden">
                   <a
                             onClick={() => setIsOpen(!isOpen)}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="bg-primary shadow-2xl shadow-primary text-2xl text-white hover:text-white hover:dark:text-white cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
                         >
                             <i className="text-2xl fas fa-bars" />
                         </a>
                </div>
                </motion.div>
                     <nav className="hidden md:flex space-x-5">
                         {pages.map((page) => (
                            <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                           >
                             <Link href={page.href} key={page.name}>
                                 <button
                                     className={`${
                                         router.pathname === page.href
                                             ? "text-gray-900 dark:text-gray-100"
                                             : "text-gray-500 dark:text-gray-400"
                                     } hover:text-gray-900 dark:hover:text-gray-100 font-semibold button-text`}
                                 >
                                     {router.pathname === page.href ? (
                                         <span className="border-b-2 py-2 border-primary"> <i className={`${page.icon.active} text-gray-900 dark:text-gray-100`} /> {page.name}</span>
                                     ) : (
                                         <span> <i className={`${page.icon.default} text-black dark:text-white padding-2`} /> {page.name}</span>
                                     )}
                                 </button>
                             </Link>
                            </motion.div>
                         ))}
                     </nav>
                     <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                         <div className="ml-4 relative flex-shrink-0">
                         <div className="flex items-center gap-4">
                         <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                               >
                         <Link href="/api/auth/login">
                         <a className="w-auto flex items-center justify-center shadow-2xl gap-x-2 shadow-primary/20 rounded-xl py-2.5 font-bold px-7 bg-gradient-to-tl from-primary/50 to-primary text-white hover:opacity-80 transition duration-200">
                                <span className="text-1xl font-bold button button-text">Login</span>
                           </a>
                        </Link>
                        </motion.div>
                        <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                 >
                        <Link href="/api/auth/register">
                         <a className="w-auto flex items-center justify-center shadow-2xl gap-x-2 shadow-primary/20 rounded-xl py-2.5 font-bold px-7 bg-gradient-to-tl from-primary/50 to-primary text-white hover:opacity-80 transition duration-200">
                                <span className="text-1xl font-bold button button-text">Register</span>
                           </a>
                        </Link>
                        </motion.div>
                         </div>
                         </div>
                         <div className="-mr-2 -my-2 md:hidden">
                         <button
                             onClick={() => setIsOpen(!isOpen)}
                             type="button"
                             className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                             aria-expanded="false"
                         >
                             <i className="fa-solid fa-bars" />
                         </button>
                         </div>
             </div>
             </div>
             </div>
             
             <Transition
            as={Fragment}
            show={isOpen ? true : false}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <div style={{ zIndex: 9999 }} className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
            <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{config.siteMetadata.author}</h1>
            </div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            <div className="-mr-2">
            <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-primary shadow-2xl shadow-primary text-2xl text-white hover:text-white hover:dark:text-white cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
            >
            <i className="fa-solid fa-times" />
            </button>
            </div>
            </motion.div>
            </div>
            <div className="mt-6">
            <nav className="grid gap-y-8">
            {pages.map((page) => (
            <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <Link href={page.href} key={page.name}>
            <a
            className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-900/50 button-text ${
            router.pathname === page.href
            ? "bg-gray-50 dark:bg-gray-900/50"
            : "text-gray-900 dark:text-gray-100"
            }`}
            >
            <i className={`${router.pathname === page.href ? page.icon.active : page.icon.default} text-black dark:text-white`} />
            <span className="ml-3 text-base font-bold">
            {page.name}
            </span>
            </a>
            </Link>
            </motion.div>
            ))}
            </nav>
            </div>
            </div>
            <div className="py-6 px-5 space-y-6">
            <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <a
            onClick={() => router.push("/api/auth/login")}
            className="bg-primary shadow-2xl shadow-primary text-2xl w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary"
            >
            <h1 className="text-white dark:text-white">
            Login
            </h1>
            </a>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <a
            onClick={() => router.push("/api/auth/register")}
            className="bg-primary shadow-2xl shadow-primary text-2xl w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary"
            >
            <h1 className="text-white dark:text-white">
            Register
            </h1>
            </a>
            </motion.div>
            </div>
            <div className="py-6 px-5 space-y-6">
            <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <a
            onClick={() => router.push(config.social.discord)}
            className="bg-primary shadow-2xl shadow-primary text-2xl w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary"
            >
            <h1 className="text-white dark:text-white">
            <i className="fab fa-discord" /> Discord Server
            </h1>
            </a>
            </motion.div>
            </div>
            </div>
            </div>
            </Transition>
         </>
        );
};
