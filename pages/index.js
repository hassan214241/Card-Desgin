import Image from 'next/image';
import cardImage from "../asats/card.jpg";



export default function Home() {
  return (
    <div className="bg-blue-400 py-24  flex items-center justify-center ">

      <div className="bg-white  rounded-lg shadow-2xl w-80 overflow-hidden  ">

        <Image src={cardImage} alt="Picture of the author" className="rounded-t-lg h-60  w-full object-cover" />

        <div className="p-8">
          <h2 className="text-lg font-extrabold ">
            Hassan
          </h2>
        </div>


        <div className="p-8 ">
          <p className=" text-justify text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptas. Consequuntur voluptatem saepe similique odio quas. Accusantium sint obcaecati quis eveniet perferendis at quasi, ea expedita placeat voluptates blanditiis fugit?</p>
          <button className="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-gray-400 hover:border-red-500 ">Get Started</button>
        </div>
        <footer className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-gray-500">
          Update 3 day ago
        </footer>
      </div>



    </div>
  )
}
