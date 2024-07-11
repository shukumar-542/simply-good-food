import React from 'react';
import img1 from '@/assets/product1.jpg'
import img2 from '@/assets/product2.jpg'
import img3 from '@/assets/product3.jpg'
import img4 from '@/assets/product4.jpg'
import img5 from '@/assets/p1.jpg'
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
const products = [
    {
        'name': 'healthy food Name',
        'img': img1,
        'price': '100',
        'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
        'rating': '4.5'
    },
    {
        'name': 'healthy food Name',
        'img': img2,
        'price': '100',
        'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
        'rating': '4.5'
    },
    {
        'name': 'healthy food Name',
        'img': img3,
        'price': '100',
        'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
        'rating': '4.5'
    },
    {
        'name': 'healthy food Name',
        'img': img4,
        'price': '100',
        'ingredients': ['protein 400gm', 'carbs 23gm', 'fat 23gm'],
        'rating': '4.5'
    },
]
const TrendingProduct = () => {
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
                        {products.map((product, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex  items-center justify-center p-4 border-none bg-[#F6F6F6]">
                                            {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                                            <div>
                                                <Image src={product?.img} className='h-60 rounded-md' height={400} width={400} alt='img' />

                                                <p className='text-[#FFB84B] flex items-center gap-2 py-2'><FaStar />{product?.rating}/5</p>
                                                <h1 className='text-2xl font-bold text-[#5E5E5E]'>{product?.name}</h1>
                                                <p className='font-bold text-xl text-[#8F7887] py-5'>${product?.price}</p>
                                                <Button className='w-full'>Add to cart</Button>
                                                <div className='flex gap-4 pt-6 justify-center items-center text-[#B47986] font-semibold'>
                                                    {
                                                        product?.ingredients.map((ingredient,i)=><p key={i}>
                                                            {ingredient}   / 
                                                        </p>)
                                                    }
                                                </div>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                {/* <Image src={img5} className='h-[50vh] rounded-md' height={400} width={400} alt='img' /> */}

                        
            </div>
        </div>
    );
};

export default TrendingProduct;