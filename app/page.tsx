import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'

const Home = async () => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="pt-32">
            <p className="text-3xl"><span className="text-green-700 font-black">ให้ AI</span> ช่วยในการ</p>
            <p className="text-3xl">พัฒนาตัวคุณ</p>
            <div className="relative mt-6 w-1/2">
              <input
                className="rounded-md py-2 pl-3 pr-10 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="AI ค้นหาคอร์สที่เหมาะสมกับคุณ"
                type="text"
                name="search"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="mt-28">
            <p className="text-green-700 font-medium text-3xl">คอร์สแนะนํา</p>
            <p className="text-2xl">Reskill/Upskill</p>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mt-8">
            <div className="slide-skill">
              <div className="left"><ChevronLeftIcon className="w-6 text-white" /></div>
              <div className="slide">
                <Image src="/assets/image/cooking.jpg" alt="Cooking" className="slide-image" width={250} height={150} />
                <span>ทำอาหาร</span>
              </div>
              <div className="slide larger-slide">
                <Image src="/assets/image/ai.jpeg" alt="AI & Data" className="slide-image" width={250} height={150} />
                <span>AI & Data</span>
              </div>
              <div className="slide">
                <Image src="/assets/image/develop.jpg" alt="Develop" className="slide-image" width={250} height={150} />
                <span>พัฒนาตัวเอง</span>
              </div>
              <div className="right"><ChevronRightIcon className="w-6 text-white" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;
