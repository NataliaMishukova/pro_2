import { type JSX } from 'react';
import Movies from './Movies';
import MovieCreation from './MovieCreation';

export default function MoviesApp(): JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='grid grid-cols-4 gap-5 max-w-screen-xl mx-auto p-4'>
          <div className='movieForm col-span-1 sticky top-4 h-fit'>
            <MovieCreation />
          </div>
          <div className='col-span-3'>
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}
