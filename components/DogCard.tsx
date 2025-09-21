import type { FC } from 'react';
import Image from 'next/image';

interface DogCardProps {
  image: string;
}

export const DogCard: FC<DogCardProps> = ({ image }) => (
  <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
    <div className='p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500'>
      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
        <path d='M13 7h3l-4-4-4 4h3v6H9l-4 4-4-4h3V7H2l4-4 4 4h3V7z'></path>
      </svg>
    </div>
    <div>
      <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
        Dog
      </p>
      <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
        <Image src={image} alt='Dog' width={500} height={300} />
      </p>
    </div>
  </div>
);