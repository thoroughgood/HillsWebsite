import Image from '@/public/2c796da45110f4245a48c2d65ba39909.jpg';
import NavigationBar from '@/components/navigationBar';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-48">
        <div className="z-10 p-24 w-[500px] max-w-5xl items-center justify-between text-2xl text-green-800 text-center lg:flex">
          Here at HSFS we make it our goal to leave our customers
          happy and satisfied.
        </div>
        <div className="relative">
          <img
            src={Image.src}
            className="rounded-full w-48 h-48"
          ></img>
          <img
            src={Image.src}
            className="rounded-full w-16 h-16 border-2 absolute left-2 bottom-2"
          />
        </div>
      </div>
      <div className="">test</div>
    </main>
  );
}
