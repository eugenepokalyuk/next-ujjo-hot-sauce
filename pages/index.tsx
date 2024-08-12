import Head from 'next/head';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Products from '@/components/Products';
import Story from '@/components/Story';

const Home = () => {
    return (
        <div className='md:w-[1440px] mx-auto p-5'>
            <Head>
                <title>Ujjo - Hot Sauce for Coffee</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The first hot sauce made for coffee." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <Header />
            <main>
                <Hero />
                
                <Products />
                
                <Story />
                
                <div className='border-x border-black'>
                    <Marquee />
                </div>
                
                <Banner />
            </main>
            
            <Footer />
        </div>
    );
};

export default Home;
