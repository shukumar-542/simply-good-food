import { Card, CardContent } from "@/components/ui/card"
import img1 from '@/assets/feedback11.png'
import img2 from '@/assets/feedback22.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay"
// plugins={[
//     Autoplay({
//         delay: 2000,
//     }),
// ]}
const Feedback = () => {

    return (
        <div className=" w-full mx-auto">
            <h1 className="text-center  text-5xl  text-gray-600 font-bold py-10">Feedbacks</h1>
            <div className="py-10 max-w-7xl mx-auto">
                <Carousel >
                    <CarouselContent>
                        <CarouselItem className="pl-20 md:basis-1/2 lg:basis-1/2">
                            <div className="flex items-center gap-5 bg-[#F6F6F6] px-5 py-8 shadow-md border-blue-100 border-2">
                                <div>
                                    <Image src={img1} height={300} width={300} alt="img" />

                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-semibold">Anjilina</p>
                                    <p className="text-orange-400">Student</p>
                                    <p className="text-gray-500  text-xl">Thank you for all, you service was soo good and safe, i will
                                        suggest my friends about your fantastic services</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-20 md:basis-1/2 lg:basis-1/2">
                            <div className="flex items-center gap-5 bg-[#F6F6F6] px-5 py-8 shadow-md border-blue-100 border-2">
                                <div>
                                    <Image src={img2} height={300} width={300} alt="img" />

                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-semibold">Anjilina</p>
                                    <p className="text-orange-400">Student</p>
                                    <p className="text-gray-500  text-xl">Thank you for all, you service was soo good and safe, i will
                                        suggest my friends about your fantastic services</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-20 md:basis-1/2 lg:basis-1/2">
                            <div className="flex items-center gap-5 bg-[#F6F6F6] px-5 py-8 shadow-md border-blue-100 border-2">
                                <div>
                                    <Image src={img1} height={300} width={300} alt="img" />

                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-semibold">Anjilina</p>
                                    <p className="text-orange-400">Student</p>
                                    <p className="text-gray-500  text-xl">Thank you for all, you service was soo good and safe, i will
                                        suggest my friends about your fantastic services</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                </Carousel>
            </div>
        </div>
    );
};

export default Feedback;