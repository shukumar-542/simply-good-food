import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { Toaster } from "sonner";
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <Navbar />
            <div className='min-h-[75vh]'>
                <Toaster position="top-right" />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;