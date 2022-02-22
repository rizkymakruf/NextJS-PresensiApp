import Bar from "../components/Bar";
import Kalender from "../components/Kalender";

export default function Riwayat() {
    return (
      <>
          <div className="bg-green-400 mb-10">
            <div className="container relative">
                <div className="bg-green-400 fixed top-0 w-full z-40 bg-fixed">
                    <div className="flex  ">
                        <div className="w-6/12 flex pl-5 pt-3 pb-3 ">
                            <div className=" text-white font-semibold">
                                Riwayat
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative top-20 mx-auto p-5  border w-80 shadow-lg rounded-md bg-white">
            <div class="mt-3 text-center">
            
            <Kalender ></Kalender>

            <div class="grid grid-cols-2 justify-items-center mt-3">
                <button className="grid rounded-full bg-green-500 h-8 w-28 items-center font-bold text-white">OK</button>  
                <button className="grid rounded-full border-2  h-8 w-28 items-center">Cancel</button>  
            </div>
            </div>
        </div>
            
          <Bar />
      </>
    )
  }