import DailyMeal from '@/components/DailyMeal/DailyMeal';
import WhyGoodFood from '@/components/WhyGoodFood/WhyGoodFood';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <DailyMeal/>
      <WhyGoodFood/>
    </div>
  );
};

export default HomePage;