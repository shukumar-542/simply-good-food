import React from 'react';
import img1 from '@/assets/product1.jpg'
import img2 from '@/assets/product2.jpg'
import img3 from '@/assets/product3.jpg'
import img4 from '@/assets/product4.jpg'
import img5 from '@/assets/kk.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Button } from '../ui/button';
import { FaStar } from 'react-icons/fa';
import { TProduct } from '@/types';
import Link from 'next/link';




// const products = [
//     {
//         'name': 'healthy food Name',
//         'img': "https://i.ibb.co/7r1vW8z/product1.jpg",
//         'price': '100',
//         'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
//         'rating': '4.5'
//     },
//     {
//         'name': 'healthy food Name',
//         'img': 'https://i.ibb.co/L11g6kR/product2.jpg',
//         'price': '100',
//         'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
//         'rating': '4.5'
//     },
//     {
//         'name': 'healthy food Name',
//         'img': 'https://i.ibb.co/HpGj07T/product3.jpg',
//         'price': '100',
//         'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
//         'rating': '4.5'
//     },
//     {
//         'name': 'healthy food Name',
//         'img': 'https://i.ibb.co/ThhC30W/product4.jpg',
//         'price': '100',
//         'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
//         'rating': '4.5'
//     },
// ]
const TrendingProduct = async () => {
    // Get all Data Form Database

    const res = await fetch('https://simple-good-food-server.vercel.app/api/v1/product')
    const products = await res.json()

    return (
        <div className='py-20'>
            <h1 className='text-center text-5xl font-bold text-gray-500'>New & Trending Product</h1>

            <div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-7xl mx-auto pt-10 cursor-pointer"
                >
                    <CarouselContent>
                        {products.map((product: TProduct) => (
                            <CarouselItem key={product?._id} className="md:basis-1/2 lg:basis-1/3 mx-auto">
                                <Link href={`/product/${product?._id}`}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex  items-center justify-center p-4 border-none bg-[#F6F6F6]">
                                                <div>
                                                    <Image src={product?.img} className='h-60 rounded-md' height={400} width={400} alt='img' />

                                                    <p className='text-[#FFB84B] flex items-center gap-2 py-2'><FaStar />{product?.rating}/5</p>
                                                    <h1 className='text-2xl font-bold text-[#5E5E5E]'>{product?.name}</h1>
                                                    <p className='font-bold text-xl text-[#8F7887] py-5'>${product?.price}</p>
                                                    <Button className='w-full'>Add to cart</Button>
                                                    <div className='flex gap-4 pt-6 justify-center items-center text-[#B47986] font-semibold'>
                                                        {
                                                            product?.ingredients.map((ingredient, i) => <p key={i}>
                                                                {ingredient}   /
                                                            </p>)
                                                        }
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent >
                    <div className='hidden sm:block'>
                        <CarouselPrevious className='-left-8  ' />
                        <CarouselNext className='-right-8' />
                    </div>
                </Carousel>
                {/* <Image src={img5} className='w-full' height={400} width={600} alt='img' /> */}


            </div>
        </div>
    );
};

export default TrendingProduct;