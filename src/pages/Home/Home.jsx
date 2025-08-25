import React from 'react';
import Banner from '../../components/banner';
import AboutMe from '../../components/AboutMe';
import Services from '../../components/Services';
import Skills from '../../components/Skills';


const Home = () => {
    return (
        <div className='bg-[#011627]'>
            <div className='w-11/12 mx-auto md:px-2'>
                <Banner />
                <AboutMe />
                <Skills />
                <Services />
            </div>
        </div>
    );
};

export default Home;