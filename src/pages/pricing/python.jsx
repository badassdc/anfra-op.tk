import swr from 'hooks/swr'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import config from '../../../site.config.js'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { motion, MotionConfigContext } from "framer-motion"

export default function Nodejs() {
    const router = useRouter()

    const priceArrayPython = [
        { label: "Monthly", img: "https://cdn.discordapp.com/avatars/1025672098607288320/73325b1535361c76957dd51cb4d6f49f.png?size=4096", price: "1$", icon: "fas fa coins" },
        { label: "Yearly", img: "https://cdn.discordapp.com/avatars/1025672098607288320/73325b1535361c76957dd51cb4d6f49f.png?size=4096", price: "4$", icon: "fas fa coins" },
    ]

    return (
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col items-center">
                    <Head>
                        <title>{config.siteMetadata.title}</title>
                        <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
                    </Head>

                    <main className="flex flex-col items-center justify-center text-center">
                        <div className="h-[70rem] md:h-[70rem] flex flex-col justify-center items-center mb-72">
                            <h1 className="relative text-4xl lg:text-5xl text-black dark:text-white pb-2 leading-20 font-semibold">Music Bots <span className="text-primary">Plans</span></h1>
                            <p className="text-gray-500 dark:text-gray-400 font-bold text-lg lg:text-xl">We offer a variety of Music Bot plans for you to choose from.</p>
                        
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-10 mt-10">
                            {/* Python */}
                            <div className="lg:h-230 w-280 bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-2xl shadow-black mt-10">
                            <h1 className="relative text-4xl lg:text-5xl text-black dark:text-white pb-2 leading-20 font-semibold">Music Bot</h1>
                            <p className="text-gray-500 dark:text-gray-400 font-bold text-lg lg:text-xl">Our Music Bot plans are very cheap and affordable.</p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mt-10">
                                {priceArrayPython.map((price, index) => (
                                    <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    key={index}
                                    >
                                 <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    >
                                    <div key={index} className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-2xl shadow-black mt-10">
                                        <motion.img
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            src={price.img}
                                            alt="music"
                                            width={60}
                                            height={60}
                                        />
                                        <h1 className="relative text-2xl lg:text-3xl text-black dark:text-white pb-2 leading-20 font-semibold mt-3">{price.label}</h1>
                                        <p className="text-gray-500 dark:text-gray-400 font-bold text-lg lg:text-xl">{price.price} Paypal / Paytm</p>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            >
                                        <motion.div 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mt-5 button-text">
                                            <Link href="https://discord.gg/d5kKHRn53S">
                                                <a>Buy Now</a>
                                            </Link>
                                        </motion.div>
                                        </motion.div>
                                    </div>
                                    </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                            </div>
                            </div>
                        </div>
                    </main>
                </div>
            </motion.div>
    )
}