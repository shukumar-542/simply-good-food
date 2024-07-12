
import { TProductId } from '@/types';
import React from 'react';
import img1 from '@/assets/product1.jpg'
import img2 from '@/assets/product2.jpg'
import img3 from '@/assets/product3.jpg'
import img4 from '@/assets/product4.jpg'

import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FiShoppingCart } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import AddCart from '@/components/AddCart/AddCart';
import TrendingProduct from '@/components/TrendingProduct/TrendingProduct';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const ProductDetailsPage = async ({ params }: { params: TProductId }) => {
    const res = await fetch(`https://simple-good-food-server.vercel.app/api/v1/product/${params.id}`)
    const product = await res.json()

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="my-10">
                <div className="relative">
                    <Link href={'/'} className="text-[#B47986] mb-10 text-lg flex items-center">
                        <span className="mr-1">
                            <FaArrowLeftLong />
                        </span>
                        <span>Back</span>
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start justify-items-start">
                        <div className="w-full rounded-[40px] p-2 bg-slate-100 overflow-hidden mt-5">
                            <Image
                                src={product?.img}
                                alt="product_image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-[100%] h-[250px] md:h-[400px] object-cover rounded-[40px]"
                            />
                        </div>

                        <div className="p-4">
                            <h1 className="text-2xl text-zinc-700 font-bold mb-5">
                                {product?.name}
                            </h1>
                            <div className="flex items-center text-yellow-500 mb-5">
                                <span className="mr-2">
                                    <IoStar />
                                </span>
                                <span>{product?.rating}/5</span>
                            </div>
                            <div className="text-xs font-semibold text-[#B47986] mb-5">
                                <span className="mr-4">Protein {21}g</span> /{" "}
                                <span className="mx-4">Carbs {24}g</span> /{" "}
                                <span className="ml-4">Fat {30}g</span>
                            </div>
                            <div className="text-2xl font-bold text-slate-500 mb-5">
                                ${100}
                            </div>
                            <p className="mb-5 font-semibold text-slate-500">
                                Crispy baked panko breaded chicken topped with a savory general
                                tsos sauce, served on a bed of brown rice alongside a cup of
                                broccoli.
                            </p>
                            <Button className='w-full'>
                                Add to cart
                            </Button>
                            <div className="mt-5 lg:w-[90%]">
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        className=" rounded-md shadow-none px-4  border-0"
                                        value="item 1"
                                    >
                                        <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                                            Ingredients
                                        </AccordionTrigger>
                                        <AccordionContent className="bg-white px-2 ">
                                            Crispy baked panko breaded chicken topped with a savory
                                            general tsos sauce, served on a bed of brown rice
                                            alongside a cup of broccoli.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem
                                        className=" rounded-md shadow-none px-4  border-0"
                                        value="item 2"
                                    >
                                        <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                                            Instructions
                                        </AccordionTrigger>
                                        <AccordionContent className="bg-white px-2 ">
                                            Crispy baked panko breaded chicken topped with a savory
                                            general tsos sauce, served on a bed of brown rice
                                            alongside a cup of broccoli.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* <AddCart/> */}
                    <div className="absolute bottom-[-10px] right-0 bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-2xl">
                            <FiShoppingCart />
                        </span>
                        <span className="-ml-3 -mt-4 bg-[#747372] text-xs w-4 h-4 text-center rounded-full">
                            1
                        </span>
                    </div>
                </div>
            </div>

            <div >
                <h1 className='text-7xl font-bold text-gray-600'>Related Products</h1>



                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-7xl mx-auto py-10 cursor-pointer  "
                >
                    <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-auto">
                                
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex  items-center justify-center p-4 border-none bg-[#F6F6F6]">
                                                <div>
                                                    <Image src={img4} className='h-60 rounded-md' height={400} width={400} alt='img' />

                                                    <p className='text-[#FFB84B] flex items-center gap-2 py-2'><FaStar />{product?.rating}/5</p>
                                                    <h1 className='text-2xl font-bold text-[#5E5E5E]'>Healthy food Name</h1>
                                                    <p className='font-bold text-xl text-[#8F7887] py-5'>$100</p>
                                                    <Button className='w-full'>Add to cart</Button>
                                                    <div className='flex gap-4 pt-6 justify-center items-center text-[#B47986] font-semibold'>
                                                        <p>Protein 49g /</p>
                                                        <p> Carbs 23g / </p>
                                                        <p>Fat 23g</p>
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-auto">
                                
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex  items-center justify-center p-4 border-none bg-[#F6F6F6]">
                                                <div>
                                                    <Image src={img2} className='h-60 rounded-md' height={400} width={400} alt='img' />

                                                    <p className='text-[#FFB84B] flex items-center gap-2 py-2'><FaStar />{product?.rating}/5</p>
                                                    <h1 className='text-2xl font-bold text-[#5E5E5E]'>Healthy food Name</h1>
                                                    <p className='font-bold text-xl text-[#8F7887] py-5'>$100</p>
                                                    <Button className='w-full'>Add to cart</Button>
                                                    <div className='flex gap-4 pt-6 justify-center items-center text-[#B47986] font-semibold'>
                                                    <p>Protein 49g /</p>
                                                        <p> Carbs 23g / </p>
                                                        <p>Fat 23g</p>
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-auto">
                                
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex  items-center justify-center p-4 border-none bg-[#F6F6F6]">
                                                <div>
                                                    <Image src={img3} className='h-60 rounded-md' height={400} width={400} alt='img' />

                                                    <p className='text-[#FFB84B] flex items-center gap-2 py-2'><FaStar />{product?.rating}/5</p>
                                                    <h1 className='text-2xl font-bold text-[#5E5E5E]'>Healthy food Name</h1>
                                                    <p className='font-bold text-xl text-[#8F7887] py-5'>$100</p>
                                                    <Button className='w-full'>Add to cart</Button>
                                                    <div className='flex gap-4 pt-6 justify-center items-center text-[#B47986] font-semibold'>
                                                    <p>Protein 49g /</p>
                                                        <p> Carbs 23g / </p>
                                                        <p>Fat 23g</p>
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-auto">
                                
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex  items-center justify-center p-4 border-none bg-[#F6F6F6]">
                                                <div>
                                                    <Image src={img1} className='h-60 rounded-md' height={400} width={400} alt='img' />

                                                    <p className='text-[#FFB84B] flex items-center gap-2 py-2'><FaStar />{product?.rating}/5</p>
                                                    <h1 className='text-2xl font-bold text-[#5E5E5E]'>Healthy food Name</h1>
                                                    <p className='font-bold text-xl text-[#8F7887] py-5'>$100</p>
                                                    <Button className='w-full'>Add to cart</Button>
                                                    <div className='flex gap-4 pt-6 justify-center items-center text-[#B47986] font-semibold'>
                                                    <p>Protein 49g /</p>
                                                        <p> Carbs 23g / </p>
                                                        <p>Fat 23g</p>
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                            </CarouselItem>
                    </CarouselContent >
                    <div className='hidden sm:block'>
                        <CarouselPrevious className='-left-8  ' />
                        <CarouselNext className='-right-8' />
                    </div>
                </Carousel>




            </div>
        </div>
    );
};

export default ProductDetailsPage;