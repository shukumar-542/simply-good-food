import DailyMeal from '@/components/DailyMeal/DailyMeal';
import FAQS from '@/components/FAQS/FAQS';
import Feedback from '@/components/Feedback/Feedback';
import WhyGoodFood from '@/components/WhyGoodFood/WhyGoodFood';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <WhyGoodFood/>
      <DailyMeal/>
      <FAQS/>
      <Feedback/>
    </div>
  );
};

export default HomePage;