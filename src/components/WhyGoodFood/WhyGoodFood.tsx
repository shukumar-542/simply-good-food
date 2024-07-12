import Image from 'next/image';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const goodFoods = [
    {
        "img": img1,
        "name": "Health awareness",
        "description": "Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best."
    },
    {
        "img": img2,
        "name": "More Protein",
        "description": "Protein rich meals to FUEL your workouts, improve recuperation, and increase outcomes"
    },
    {
        "img": img3,
        "name": "Health awareness",
        "description": "Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine"
    },
]

const WhyGoodFood = () => {
    return (
        <div className='max-w-6xl mx-auto py-10'>
            <h1 className="text-center text-4xl text-gray-700 font-bold">Why Simply Good Food</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                {
                    goodFoods.map((food, i) => <div key={i} className='flex flex-col gap-5 justify-center items-center space-y-5'>
                        <div className='h-32 '>
                            <Image src={food?.img} className='h-36 ' height={150} width={150} alt='img' />
                        </div>

                        <h1 className='text-3xl font-bold text-gray-600'>{food?.name}</h1>
                        <p className='text-center'>{food?.description}</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default WhyGoodFood; 