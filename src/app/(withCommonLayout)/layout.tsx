import Footer from '@/components/shared/Footer/Footer';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <h1>Nav bar </h1>
            <div className='min-h-[75vh]'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;