export default function DataStatik(){
    return(
        <div className="bg-slate-100 pb-2 pt-5 ">
            <div className="container grid grid-cols-1 justify-items-center">
                <div className="flex w-[90%]">
                    <div className="grid font-bold text-base">Data Static</div>
                </div>

                <div className="grid grid-cols-2 justify-items-center">
                    <div class="bg-white w-40 p-3 rounded-lg m-3 drop-shadow-md">
                        <img src="img/hadir.svg" className="h-10 w-10"/>
                        <div className="text-black font-bold text-xl">12</div>
                        <div className="text-slate-400">Hadir</div>
                    </div>
                    <div class="bg-white w-40 p-3 rounded-lg m-3 drop-shadow-md">
                        <img src="img/late.svg" className="h-10 w-10"/>
                        <div className="text-black font-bold text-xl">0</div>
                        <div className="text-slate-400">Terlambat</div>
                    </div>
                    <div class="bg-white w-40 p-3 rounded-lg m-3 drop-shadow-md">
                        <img src="img/tidak.svg" className="h-10 w-10"/>
                        <div className="text-black font-bold text-xl">9</div>
                        <div className="text-slate-400">Tidak Hadir</div>
                    </div>
                    <div class="bg-white w-40 p-3 rounded-lg m-3 drop-shadow-md">
                        <img src="img/izin.svg" className="h-10 w-10"/>
                        <div className="text-black font-bold text-xl">0</div>
                        <div className="text-slate-400">Izin</div>
                    </div>
                </div>

            </div>
        </div>
    );
}