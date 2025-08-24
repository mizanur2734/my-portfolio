import React from 'react';
import Banner from '../../components/banner';
import AboutMe from '../../components/AboutMe';
import Services from '../../components/Services';


const Home = () => {
    return (
        <div className='bg-[#011627]'>
            <div className='w-11/12 mx-auto md:px-2'>
                <Banner />
                <AboutMe />
                <Services />
            </div>
        </div>
    );
};

export default Home;