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
import { IoStar } from 'react-icons/io5';




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
        <div className='py-20 max-w-6xl mx-auto'>
            <h1 className='text-center text-5xl font-bold text-gray-500 mb-10'>New & Trending Product</h1>

            <div>

                <Carousel>
                    <CarouselContent>
                        {products.map((product: TProduct) => (
                            <CarouselItem
                                key={product?._id}
                                className="md:basis-1/2 lg:basis-[29%] gap-32 ml-2"
                            >
                                <Link href={`/product/${product?._id}`}>
                                    <div className="bg-gray-100  rounded-lg p-2 flex flex-col">
                                        <Image
                                            src={product?.img}
                                            alt="food_image"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-56 object-cover rounded-lg mb-4"
                                        />
                                        <div className="flex items-center mb-1">
                                            <IoStar className="text-amber-500" />
                                            <span className="ml-1 text-sm text-amber-500">{product?.rating}/5</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-600 mb-3">{product?.name}</h3>
                                        <p className="text-sm text-gray-500 font-bold mb-4">${product?.price}</p>
                                        <Button>Add To Cart</Button>
                                        <div className="text-xs py-2 text-[#B47986] flex justify-evenly">
                                            {
                                                product?.ingredients.map((ingredient, i) => <p key={i}>
                                                    {ingredient}   /
                                                </p>)
                                            }
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                


            </div>
        </div>
    );
};

export default TrendingProduct;