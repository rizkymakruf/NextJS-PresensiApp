export default function Presensi(){
    return(
        <div className="bg-slate-100 pb-2 pt-2">
            <div className="container">
            <center>
            <div className="flex w-[90%] items-center"> 
                <div className="w-6/12 text-lg font-bold text-left">Presensi</div>
                <div className="text-right w-6/12 text-sm font-bold text-green-500">Senin, 21 Februari</div>
            </div>
            <div className="flex w-[90%] items-center"> 
                <div className="w-6/12 text-sm text-slate-400 text-left">Aktivitasmu Hari ini</div>
            </div>
            </center>
            <div class="content-center bg-white w-[90%] pt-3 pb-3 rounded-lg m-3 mx-auto drop-shadow-md">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 ">
                    <div className="flex ml-2 mb-2 items-center">
                        <img src="img/core.svg" className="w-12 item-center mr-2"/>
                        <small className="text-sm font-bold">Belum Presensi</small>
                    </div>
                    <div className="flex ml-2 mb-2 items-center">
                        <img src="img/clock-g.svg" className="w-6 item-center mr-2"/>
                        <small className="text-sm font-bold">Datang : -</small>
                    </div>
                    <div className="flex ml-2 items-center">
                        <img src="img/clock-r.svg" className="w-6 item-center mr-2"/>
                        <small className="text-sm font-bold">Pulang : -</small>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 content-center">
                    <img src="img/profile.svg" className="w-12 item-center mr-2"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}