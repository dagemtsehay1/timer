
import React from 'react';
import { useCountdown } from '../context/CountdownContext'; // Adjust the path as needed
import Link from 'next/link';

function Home() {
  const { countdown } = useCountdown();

  return (
    <div>
      <h1>Page 1</h1>
      <p>Countdown: {countdown} seconds</p>
      <Link href="/page2">Page 2</Link>
    </div>
  );
}

export default Home;
