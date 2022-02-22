import Slide1 from "./Slide1";

export default function Aktivitas(){
    return(
    <div className="bg-slate-100 pb-2">
        <div className="container">
            <center>
                <div className="flex w-[90%] items-center mb-1"> 
                    <div className="text-lg font-bold text-left">Aktivitas Bulanan</div>
                </div>
                <div className="flex w-[90%]">
                    <button className="mr-3  pl-3 pr-3 rounded-full border-2 border-green-500">Lembur</button>
                    <button className="mr-3  pl-3 pr-3 rounded-full border-2 border-slate-500">Izin dan Cuti</button>
                </div>
            </center>
        </div>

        <Slide1 />

    </div>
    );
}