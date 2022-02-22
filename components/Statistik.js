export default function Statistik(){
    return(
        <div className="bg-slate-100 pb-2 pt-2 mb-12">
            <div className="container">
            <center>
            <div className="flex w-[90%] items-center"> 
                <div className="w-6/12 text-lg font-bold text-left">Statistik</div>
                <div className="text-right w-6/12 text-sm font-bold text-green-500">Lihat Detail</div>
            </div>
            <div className="flex w-[90%] items-center"> 
                <div className="w-6/12 text-xs text-slate-400 text-left">Yuk! Lihat statik kegiatanmu</div>
            </div>
            </center>

            <div class="content-center bg-white w-[90%] pt-3 pb-3 rounded-lg m-3 mx-auto drop-shadow-md">
                <center>
                <div className="table w-full mb-3">
                    <div className="table-row w-6/12">
                    <div className="table-cell p-3 border-b-2 border-r-2">
                        <div className="flex items-center">
                        <div className="w-6/12 text-sm text-left">Hadir</div>
                        <div className="w-6/12 font-bold text-2xl text-right">12</div>
                        </div>
                    </div>
                    <div className="table-cell p-3 border-b-2">
                    <div className="flex items-center">
                        <div className="w-6/12 text-sm text-left">Terlambat</div>
                        <div className="w-6/12 font-bold text-2xl text-right">0</div>
                        </div>
                    </div>
                    </div>
                    <div className="table-row w-6/12">
                    <div className="table-cell p-3 border-r-2">
                        <div className="flex items-center">
                        <div className="w-6/12 text-sm text-left">Tidak Hadir</div>
                        <div className="w-6/12 font-bold text-2xl text-right">9</div>
                        </div>
                    </div>
                    <div className="table-cell p-3">
                        <div className="flex items-center">
                        <div className="w-6/12 text-sm text-left">Izin</div>
                        <div className="w-6/12 font-bold text-2xl text-right">0</div>
                        </div>
                    </div>
                    </div>
                </div>
                </center>
                <div className="mx-auto ml-3 mb-8">
                <button className="w-[95%] bg-slate-300 fixed z-30 rounded-lg h-2 font-invisible"></button>
                <button className="w-[65%] bg-green-500 fixed z-40 text-green-500 rounded-lg h-2"></button>
                </div>

                <div className="flex items-center text-center">
                <div className="w-4/12 text-slate-400">Status</div>
                <div className="w-1/12 text-slate-400">:</div>
                <div className="w-7/12 text-yellow-500 font-semibold">Kurang Baik</div>
                </div>
            </div>

            </div>
        </div>
    );
}