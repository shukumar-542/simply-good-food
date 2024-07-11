
import { TProductId } from '@/types';
import React from 'react';


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

const ProductDetailsPage = async ({ params }: { params: TProductId }) => {
    const res = await fetch(`https://simple-good-food-server.vercel.app/api/v1/product/${params.id}`)
    const product = await res.json()

    // console.log(product);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="my-10">
                    <div className="relative">
                        <button className="text-[#B47986] mb-10 text-lg flex items-center">
                            <span className="mr-1">
                                <FaArrowLeftLong />
                            </span>
                            <span>Back</span>
                        </button>
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
                                            className=" rounded-md shadow-none px-4 mb-2 border-0"
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
                                            className=" rounded-md shadow-none px-4 mb-2 border-0"
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

            <div>
                <h1 className='text-7xl font-bold text-gray-600'>Related Products</h1>
                <TrendingProduct/>
            </div>
        </div>
    );
};

export default ProductDetailsPage;