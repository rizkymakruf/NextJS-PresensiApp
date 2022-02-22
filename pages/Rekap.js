import Bar from "../components/Bar";
import Statik from "../components/Statik";
import DataStatik from "../components/DataStatik";
import Goal from "../components/Goal";

export default function Rekap() {
    return (
      <>
        <div className="bg-green-400 mb-10">
            <div className="container relative">
            <div className="bg-green-400 fixed top-0 w-full z-40 bg-fixed">
            <div className="flex  ">
                <div className="w-6/12 flex pl-5 pt-3 pb-3 ">
                <div className=" text-white font-semibold">
                    Rekap Satu Semester
                </div>
                </div>
            </div>
            </div>
            </div>
        </div> 

        <div className="bg-slate-100 pb-2 pt-2">
            <div className="container">
                <div class="content-center bg-white w-[90%] pt-3 pb-3 rounded-lg m-3 mx-auto drop-shadow-md">
                    <div className="grid grid-cols-1 gap-4 m-3">
                        <div className="font-bold">Statistik Peforma</div>
                        <img src="img/chart.png"/>
                    </div>
                </div>
            </div>
        </div>

        <Statik />

        <Goal />
        
        <DataStatik />

        <Bar />
      </>
    )
  }