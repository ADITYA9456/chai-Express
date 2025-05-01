import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-[40vh] text-white ">
        <div className="font-bold text-3xl items-center justify-center flex gap-3"> Buy me a Chai <span> <img src="/gif/tea.gif" width={65} height={20} alt="tea" /></span> </div>
        <p>
          Craving a hot cup of chai? We bring freshly brewed, flavorful chai straight to your doorstep. Order now and enjoy the perfect sip, anytime, anywhere!. Start now!
        </p>
        <div className=" py-6 ">
          {/* Start button  */}

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start Now</button>

          {/* read button */}

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read more
            </span>
          </button>
        </div>
      </div>
      <div className=" bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image src={"/gif/man.gif"} width={88} height={88} className="bg-slate-400 rounded-full p-2 text-black" alt="man" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image src={"/gif/coin.gif"} width={88} height={88} className="bg-slate-400 rounded-full p-2 text-black" alt="Coin" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image src={"/gif/group.gif"} width={88} height={88} className="bg-slate-400 rounded-full p-2 text-black" alt="group" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>

        </div>
      </div>

      <div className=" bg-white h-1 opacity-10"></div>
    </>
  );
}
