import Background from '@/public/openart-160ba66dac90491fb31a736d27d8c774_raw.jpg';
import Workers from '@/public/Untitled.jpg';
import NavigationBar from '@/components/navigationBar';
import InfoCard from '@/components/infoCard';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative h-[600px] max-h-850">
        <img
          src={Background.src}
          alt="Your Background"
          className="object-cover h-[600px] w-full max-h-850px"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-800 to-transparent"></div>
      </div>

      <div className="inline-block relative left-32 bottom-40 text-lg text-white font-bold">
        <div className="bg-green-950/60 absolute -bottom-20 -left-3 rounded-2xl h-48 w-[524px] shadow-md" />
        <button className="absolute py-4 px-8 rounded-full bg-transparent border-2 border-white">
          {' '}
          Learn More{' '}
        </button>
        <button className="absolute text-white left-44 py-4 px-8 rounded-full bg-transparent border-2 border-white">
          {' '}
          Get a Quote{' '}
        </button>
        <div className="text-white max-w-lg bottom-5 font-bold absolute">
          We've expanded our ladnscaping services to provide an ample
          amount of details to your garden to improve our cuistomer
          benefits and satifsaction for whatever
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row flex-wrap text-center">
        <InfoCard link={Workers.src} />
        <div className="text-green-900 font-bold w-64 text-center">
          {' '}
          This is information about the service and what they have to
          offer and other stuff
        </div>
        <InfoCard link={Workers.src} />
      </div>
    </main>
  );
}
