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

export default function Services() {
    const servicesArray = [
        { image: "https://cdn.discordapp.com/avatars/1016973145946734662/262fe317f4a51754b807b8e582c7ec4d.png?size=4096", label: "System Bots", value: "We offer great System Bots!", extraClass: "", href: "/pricing/nodejs" },
        { image: "https://cdn.discordapp.com/avatars/1025672098607288320/73325b1535361c76957dd51cb4d6f49f.png?size=4096", label: "Music Bots", value: "We offer great Music Bots!", extraClass: "", href: "/pricing/python" },
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
                <div className="h-[140rem] md:h-[65rem] flex flex-col justify-center items-center">
                    <h1 className="relative text-4xl lg:text-5xl text-black dark:text-white pb-2 leading-20 font-semibold">Our <span class="text-primary">Services</span></h1>
                    <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">We have a Some Paid Bots services that you can Buy in Cheap!</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-10">
        {servicesArray.map((stat, index) => (
            <div className="flex flex-col items-center">
              <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <div className="lg:h-30 w-80 bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center">
              <img src={stat.image} className={`h-20 w-20 ${stat.extraClass}`} />
              </div>
              <div className="mt-5">
              <h2 className="text-2xl font-bold text-black dark:text-white mt-4">{stat.label}</h2>
              <p className="text-lg text-gray-500 font-bold mt-4">{stat.value}</p>
              </div>
              <div className="mt-5">
              <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              <Link href={stat.href}>
              <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg">See Plans</button>
              </Link>
              </motion.div>
              </div>
            </div>
            </motion.div>
          </div>
        ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-5">
        </div>
        </div>
            </main>
        </div>
        </motion.div>
        </>
    )
}