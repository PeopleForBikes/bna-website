import Image from 'next/image';
import logo from '@Images/logo-bna-full-1015×596.png';


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h2>People For Bikes</h2>
      <Image
        src={logo}
        alt='BNA Logo'
      />
    </main>
  );
}
