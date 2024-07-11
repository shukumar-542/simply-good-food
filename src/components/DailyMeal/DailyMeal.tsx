import food from '@/assets/food1.jpg'
import food1 from '@/assets/sss.jpg'
import Image from 'next/image';
import { Button } from '../ui/button';
import { MdOutlineArrowOutward } from 'react-icons/md';
const DailyMeal = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center py-16 '>
            <div className=' bg-[#C4C4C4] h-full flex items-center '>
                <div className='bg-white rounded-tr-full rounded-br-full py-10 '>
                    <div className='w-[60%] mx-auto space-y-5 '>
                        <h1 className='text-5xl font-bold '>Make daily meals healthy and moderate</h1>
                        <p className='text-green-900'>Ingredients are naturally rich and full of taste.</p>
                        <Button>Meal Plan <MdOutlineArrowOutward /></Button>
                    </div>
                </div>
            </div>
            <div className=''>
                <Image src={food} className=' w-full h-[80vh]' height={400} width={500} alt="img" />
            </div>
        </div>
    );
};

export default DailyMeal;