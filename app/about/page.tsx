import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => (
  <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
    <Head>
      <title>About Us - Let's Get It - Dogs</title>
      <meta name='description' content='Learn more about us' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='flex flex-col justify-center sm:px-6 lg:px-8'>
      <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>About Us</h1>
      <p className='mt-2 text-center text-lg text-gray-700'>We are a group of dog lovers who created this website to share our love for dogs. Our goal is to educate people about different breeds of dogs and provide a platform for dog lovers to connect and share their experiences.</p>
      <div className='mt-6 text-center'>
        <Link href='/'>
          Go back to home
        </Link>
      </div>
    </main>
  </div>
);

export default About;