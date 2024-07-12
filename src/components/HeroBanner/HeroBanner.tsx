"use client"
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Button } from '../ui/button';
import img1 from '@/assets/hero-img-modified.png'
import img2 from '@/assets/product1.jpg'

import Image from 'next/image';



import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import AddCart from '../AddCart/AddCart';
const images = [
    img1, img2
];
const HeroBanner = () => {


    // const [api, setApi] = React.useState<CarouselApi>()


    // React.useEffect(() => {
    //     if (!api) {
    //         return
    //     }

    //     setCount(api.scrollSnapList().length)
    //     setCurrent(api.selectedScrollSnap() + 1)

    //     api.on("select", () => {
    //         setCurrent(api.selectedScrollSnap() + 1)
    //     })
    // }, [api])


    return (
        <div className=' mb-20 bg-cover bg-center' style={{ backgroundImage: `url(https://i.ibb.co/wQT73K5/home-hero.jpg)` }} >
            <div className='bg-white bg-opacity-95 h-full  py-20'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center justify-center'>
                    <div className=''>
                        <h1 className='text-[80px] font-bold tracking-wider'>Keep track of <br /> <span className='text-green-600 mt-5'>Fitness Goal</span></h1>
                        <p className='text-2xl font-bold tracking-wider my-10 '>Order on Simply Good Food</p>
                        <Button variant={'heroButton'}>Explore More <MdOutlineArrowOutward /></Button>
                    </div>
                    <div className='relative'>
                        <Carousel className="w-full  max-w-xs md:max-w-[400px] lg:max-w-xl rounded-full border-[60px]  border-[#6CA760] p-10 ">
                            <CarouselContent>
                                {images.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <Card className=' rounded-full '>
                                            <CardContent className="flex  items-center justify-center p-0">
                                                <Image src={img} className=' w-full rounded-full ' height={400} width={500} alt="img" />

                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent >
                            <CarouselPrevious className='z-20' />
                            <CarouselNext className='z-20' />
                        </Carousel>
                        <div className='absolute -right-10 bottom-5 hidden sm:block'>
                            <div className=''>

                                <AddCart />
                                <span className="bg-[#747372] text-white text-center px-2 right-[11px] top-3   rounded-full text-sm md:text-md absolute">1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;