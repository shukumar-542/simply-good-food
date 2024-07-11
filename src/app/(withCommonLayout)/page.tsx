import DailyMeal from '@/components/DailyMeal/DailyMeal';
import FAQS from '@/components/FAQS/FAQS';
import Feedback from '@/components/Feedback/Feedback';
import TrendingProduct from '@/components/TrendingProduct/TrendingProduct';
import WhyGoodFood from '@/components/WhyGoodFood/WhyGoodFood';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <WhyGoodFood/>
      <TrendingProduct/>
      <DailyMeal/>
      <FAQS/>
      <Feedback/>
    </div>
  );
};

export default HomePage;