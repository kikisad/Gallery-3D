import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Head from 'next/head';
import { motion } from "framer-motion"



export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  return {
    props: {
      images: data,
    },
  }
}


function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  imageSrc: string
  categorie: string
  username: string
}
// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};



export default function Gallery({ images }: { images: Image[] }) {
  return (   
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className="mx-auto max-w-1xl py-8 px-4 sm:pb-24 sm:px-6 lg:max-w-[100%] lg:px-8 ">

      <motion.div variants={stagger} className="w-full h-[33rem] md:h-[46rem] mb-6 rounded-md p-8 bg-gradient ">
        <div className="grid grid-cols-3 grid-rows-1 w-full h-2/6 ">
          <Image src='https://ftvqcjbvghbzcffmcsaq.supabase.co/storage/v1/object/public/images/Logo.svg' loading='eager' layout='fixed' width={55} height={55} alt='Logo-Object' />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 w-full h-2/6 items-center ">
          <motion.div variants={fadeInUp} className="col-span-3 lg:pr-90 md:pr-28">
          <h1 className="mt-4 lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-gray-700 antialiased">A nice library of modest 3D illustrations <br />  to take your design to the next level.</h1>
          <h2 className="mt-4 text-base lg:text-lg text-gray-700 font-sans ">Enhance your design story, with fancy and colorful illustrations for your next project. All these graphics can be useful for financial applications, presentations, services and many more. Object.wtf is a growing library, unmade and free for now and Forever ! So use it to create even more. </h2>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="grid grid-cols-2 grid-rows-1 w-full h-2/6 items-end">
          <div className=''>
            <h3 className="mt-4 text-xs text-gray-500 "> Last update : 16 may 2022 </h3>
          </div>
          <div className='place-self-end'>
            <h3 className="mt-4 text-xs text-gray-500 ">Number of objects : 37/30 </h3>
          </div>
        </motion.div>
      </motion.div>
      <div className="space-x-3 pb-6 hidden">
              <a href="#" className="text-xs text-gray-900  hover:underline">All</a>

              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 hover:underline">Finance</a>

              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 hover:underline">Technologie</a>

              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 hover:underline">Designer Tool</a>

              <a href="#" className="text-xs text-gray-500  hover:text-gray-900 hover:underline">Basic</a>
        </div>
        <motion.div variants={stagger} className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-6">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </motion.div>
      <div>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl text-gray-700 text-center px-[1em] md:px-[3em] lg:px-[5em]   py-28">Create a social post, landing page or your next top-notch presentation in a snap with these high-quality packs.</h2>
      </div>
      <div className="py-4 w-5/6 md:w-4/6 m-auto">
        <div >
          <div className="border-t border-gray-300 p-auto"></div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 w-full h-2/6 items-end  pt-5">
          <div className='flex flex-col'>
            <h3 className="mt-4 text-xl text-gray-700 "> Free for now and Forever * 
            <p className="mt-4 text-sm">Only png files 3000x3000, blender files will come later.</p></h3>
          </div>
          <div className='place-self-end'>
          <a className="inline-flex items-center px-9 py-5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-900 focus:outline-none leading-3	" href="https://www.dropbox.com/s/lus1r0hlbydrl0m/3D_illustrations_Object_Wtf_V0.1.zip?dl=0" target="_blank"> Get it for free </a>  
          </div>
        </div>
      </div>
      <div className="pt-5 py-4 w-5/6 md:w-4/6 m-auto">
        <div >
          <div className="border-t border-gray-300 p-auto"></div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 w-full h-2/6 items-end  pt-5">
          <div className='flex flex-col'>
            <h3 className="mt-4 text-xl text-gray-700 "> Support the project * 
            <p className="mt-4 text-sm"> Because I made your project even more extraordinary. </p></h3>
          </div>
          <div className='place-self-end'>
          <script src="https://gumroad.com/js/gumroad.js"></script>
            <a className="inline-flex items-center px-9 py-5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-900 focus:outline-none leading-3	" href="https://kikisad.gumroad.com/l/zlgjiw?wanted=true"> Support the project</a>  
          </div>
        </div>
      </div>
      <div className="pt-5 py-4 w-5/6 md:w-4/6 m-auto">
        <div >
          <div className="border-t border-gray-300 p-auto"></div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 w-full items-end  pt-5">
          <div className='flex flex-col'>
            <h6 className="mt-4 text-sm text-gray-500 "> A project lovingly realized by <a className="text-xs text-gray-900  hover:underline" href='https://www.killiancartignies.com/'>Killian Cartignies.</a> Thanks to the <a className="text-xs text-gray-900  hover:underline" href='https://pangrampangram.com/'>Pangrampangram Foundry </a> for the font : Editorial New </h6>
            <h4 className="mt-4 text-sm text-gray-500 "> ?? 2022 All Rights Reserved </h4>
          </div>         
        </div>
      </div>
    </motion.div>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <a  className="group">
      <motion.div variants={fadeInUp}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 cursor-pointer"> 
              <Image
                alt=""
                src={image.imageSrc}
                layout="fill"
                objectFit="cover"
                className={cn(
                  'duration-300 ease-in-out group-hover:scale-105',
                  isLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
              <div className="grid grid-cols-2 grid-rows-1 w-full items-end p-2">
                <div className=''>
                </div>
                <div className='place-self-end'>
                  <h3 className="mt-4 text-xs text-gray-400 font-sans">{image.categorie}</h3>
                </div>

              </div>

          </div>
         </motion.div>

    </a>
  )
}

