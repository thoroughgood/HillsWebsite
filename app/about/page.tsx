import Image from '@/public/2c796da45110f4245a48c2d65ba39909.jpg';
import NavigationBar from '@/components/navigationBar';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <img src={Image.src}></img>

      <div className="z-10 p-24 w-full max-w-5xl items-center justify-between font-mono text-sm text-black lg:flex">
        DIFFERENT
      </div>
    </main>
  );
}
