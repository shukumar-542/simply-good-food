import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';
const layout = async({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)
    // console.log(session);
    return (
        <div className=''>
            <Navbar  />
            <div>
            
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;