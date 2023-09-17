// pages/page2.tsx
import React from 'react';
import { useCountdown } from '../context/CountdownContext'; // Adjust the path as needed
import Link from 'next/link';

function Page2() {
  const { countdown } = useCountdown();

  return (
    <div>
      <h1>Page 2</h1>
      <p>Countdown: {countdown} seconds</p>
      <Link href="/" className='text-blue-500 font-bold'>Page 1</Link>
    </div>
  );
}

export default Page2;
