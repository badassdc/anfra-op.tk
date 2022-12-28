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

export default function Home() {
  const router = useRouter()

  const statsArray = [
    { label: "Total Bots Created", value: "80+", icon: "fas fa-server" },
    { label: "Total Nodes", value: "1+", icon: "fas fa-users" },
    { label: "Users", value: "100+", icon: "fas fa-comments" },
  ]

  const chooseArray = [
    { number: "1.", label: "Free Source Codes", value: "We Provide Free Source Codes of Discord bots(open source)." },
    { number: "2.", label: "Free Bots", value: "We Provide Free Bots with many commands Hosted Manually on our Private Hosting Panel!" },
    { number: "3.", label: "Good Bots Ping ", value: "We are Actually Providing Hosted with good Pings (20-30-40 ms)" },
  ]

  const chooseArray2 = [
    { number: "4.", label: "Support Team", value: "We have a great support team that will help you with any problem you have!" },
    { number: "5.", label: "Paid Bots too", value: "We Also Provide Paid Cheap Bots" },
    { number: "6.", label: "Fast Support", value: "We have a very fast support team that will help you with any problem you have!" },
  ]

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
      <div className="h-[33rem] flex flex-col justify-center items-center mb-72">
      <h1 className="relative text-4xl lg:text-5xl text-black dark:text-white pb-2 leading-20 font-semibold">Welcome To <span class="text-primary">AnFra Supreme</span></h1>
      <p className="text-lg text-gray-500 font-bold">Start using AnFra Supreme and Manage your Discord Servers</p>
      <div className="flex justify-center w-full mt-6">
      <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
          >
            <Link href={`/services`} locale="en">
                            <a className="w-auto flex items-center justify-center shadow-2xl gap-x-2 shadow-primary/20 rounded-xl py-3.5 font-bold px-8 bg-gradient-to-tl from-primary/50 to-primary text-white hover:opacity-80 transition duration-200">
                                <span className="text-1xl font-bold button button-text">Our Services</span>
                            </a>
            </Link>
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mr-4 ml-4 mt-4"
          >
            <Link href={`/pricing`} locale="en">
                            <a className="w-auto flex items-center justify-center shadow-2xl gap-x-2 shadow-primary/20 rounded-xl py-3.5 font-bold px-8 bg-gradient-to-tl from-primary/50 to-primary text-white hover:opacity-80 transition duration-200">
                                <span className="text-1xl font-bold button button-text">Pricing</span>
                            </a>
            </Link>
          </motion.div>
            </div>
      </div>

        <div className="mb-40 max-w-3xl mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl font-bold text-black dark:text-white">Why <span className="text-primary">Choose Us?</span></h1>
        <p className="text-lg text-gray-500 font-bold">We deliver high quality Discord Bots for FREE and Paid with a great support team!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-60 mt-5 py-6">
        {chooseArray.map((stat, index) => (
            <div className="flex flex-col items-center">
              <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <div className="lg:h-30 w-80 bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-lg">
              <h1 className="text-4xl font-bold text-black dark:text-white absolute">{stat.number}</h1>
              <div className="mt-16">
              <h2 className="text-2xl font-bold text-black dark:text-white mt-4">{stat.label}</h2>
              <p className="text-lg text-gray-500 font-bold mt-4">{stat.value}</p>
              </div>
            </div>
            </motion.div>
          </div>
        ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-60 py-6">
        {chooseArray2.map((stat, index) => (
            <div className="flex flex-col items-center">
            <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <div className="lg:h-30 w-80 bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-lg">
              <h1 className="text-4xl font-bold text-black dark:text-white absolute">{stat.number}</h1>
              <div className="mt-16">
              <h2 className="text-2xl font-bold text-black dark:text-white mt-4">{stat.label}</h2>
              <p className="text-lg text-gray-500 font-bold mt-4">{stat.value}</p>
              </div>
            </div>
            </motion.div>
          </div>
        ))}
        </div>
        </div>
        </div>

        <div className="py-20 max-w-3xl mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-4xl text-black dark:text-white pb-2 font-semibold">Some of our <span className="text-primary">Stats</span></h1>
            <p className="text-lg text-gray-500 font-bold">Here you can see some of our stats!</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-60 mt-5 py-6">
        {statsArray.map((stat, index) => (
          <div className="flex flex-col items-center">
            <motion.div
            whileHover={{ scale: 1.05 }}
            >
            <div className="lg:h-30 w-80 bg-gradient-to-br from-primary/10 to-primary-dark rounded-lg p-6 shadow-lg">
              <i className={`${stat.icon} text-4xl text-primary`}></i>
              <h1 className="text-2xl font-bold text-black dark:text-white mt-4">{stat.value}</h1>
              <p className="text-lg text-gray-500 font-bold">{stat.label}</p>
            </div>
            </motion.div>
          </div>
        ))}
        </div>
        </div>
        </div>
      </main>
    </div>
    </motion.div>
    </>
  )
}