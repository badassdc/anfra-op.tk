import swr from 'hooks/swr'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import config from '../../site.config.js'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { motion, MotionConfigContext } from "framer-motion"

export default function Partners() {
    const partners = [
        { label: "TrestHost [DEPRECATED]", image: "T2.png", link: "https://tresthost.com", href: "https://panel.techstar.live/", extraClass: "rounded-full" },
        { label: "Tech Star Host", image: "Tech_Star.png", link: "https://panel.techstar.live/", href: "https://panel.techstar.live/", extraClass: "rounded-full" },
        { label: "NVME Networks", image: "NVME Networks.png", link: "https://nvmenetworks.com/", href: "https://nvmenetworks.com/", extraClass: "rounded-full" },
    ]

    const router = useRouter()

    return (
        <>
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
                <div className="h-[50rem] flex flex-col justify-center items-center">
                    <h1 className="relative text-4xl lg:text-5xl text-black dark:text-white pb-2 leading-20 font-semibold">Our <span class="text-primary">Partners</span></h1>
                    <p className="text-gray-500 dark:text-gray-400 font-bold text-lg lg:text-xl">partnered with some amazing people</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md>We have:gap-10 mt-10">
        {partners.map((partner, index) => (
            <div className="flex flex-col items-center">
              <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <div className="lg:h-30 w-80 bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center">
              <img src={partner.image} className={`h-20 w-20 ${partner.extraClass}`} />
              </div>
              <div className="mt-5">
              <h2 className="text-2xl font-bold text-black dark:text-white mt-4">{partner.label}</h2>
              <p className="text-lg text-gray-500 font-bold mt-4"><i className="fas fa-globe"></i> <span className="text-primary">{partner.link}</span></p>
              </div>

              <div className="flex flex-row justify-center mt-5">
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <a href={partner.href} target="_blank" className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition duration-200 ease-in-out button button-text"><i className="fas fa-external-link-alt"></i> Visit</a>
                </motion.div>
              </div>
            </div>
            </motion.div>
          </div>
        ))}
        </div>
        </div>
        </main>
        </div>
        </motion.div>
        </>
    )
}