import DailyMeal from '@/components/DailyMeal/DailyMeal';
import FAQS from '@/components/FAQS/FAQS';
import Feedback from '@/components/Feedback/Feedback';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import TrendingProduct from '@/components/TrendingProduct/TrendingProduct';
import WhyGoodFood from '@/components/WhyGoodFood/WhyGoodFood';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroBanner/>
      <WhyGoodFood/>
      <TrendingProduct/>
      <DailyMeal/>
      <FAQS/>
      <Feedback/>
    </div>
  );
};

export default HomePage;