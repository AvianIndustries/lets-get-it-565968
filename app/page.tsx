import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { DogCard } from '../components/DogCard';

const Home: NextPage = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => setDogs(data.message));
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <Head>
        <title>Let's Get It - Dogs</title>
        <meta name='description' content='A website about dogs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center sm:px-6 lg:px-8'>
        <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Welcome to the world of Dogs</h1>
        <div className='mt-8 max-w-md mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl'>
          {dogs.map((dog, index) => (
            <DogCard key={index} image={dog} />
          ))}
        </div>
        <div className='mt-6 text-center'>
          <Link href='/about'>
            Learn more about us
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;