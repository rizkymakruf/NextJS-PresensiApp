import Link from 'next/link'

export default function Bar(){
    return(
        <div className="bg-white">
        <div className="container">
          <div className="bg-white fixed bottom-0 w-full z-40 bg-fixed ">
          <div className="grid grid-cols-5 gap-4">

            <div className="pt-2 pb-2 grid justify-items-center">
                <Link href="/">
                    <img src="img/home.svg" class="h-6 w-6"/>
                </Link>
                <small className="text-xs text-center text-slate-500">Home</small>
            </div>
            <div className="pt-2 pb-2 grid justify-items-center">
                <Link href="/Jadwal">
                    <img src="img/calender.svg" class="h-6 w-6"/>
                </Link>
                <small className="text-xs text-center text-slate-500">Jadwal</small>
            </div>
            <div className="pt-2 pb-2 grid justify-items-center">
                <Link href="/Riwayat">
                    <img src="img/history.svg" class="h-6 w-6"/>
                </Link>
                <small className="text-xs text-center text-slate-500">Riwayat</small>
            </div>
            <div className="pt-2 pb-2 grid justify-items-center">
                <Link href="/Rekap">
                    <img src="img/rekap.svg" class="h-6 w-6"/>
                </Link>
                <small className="text-xs text-center text-slate-500">Rekap</small>
            </div>
            <div className="pt-2 pb-2 grid justify-items-center">
                <Link href="/Profile">
                    <img src="img/profile1.svg" class="h-6 w-6"/>
                </Link>
                <small className="text-xs text-center text-slate-500">Profile</small>
            </div>

          </div>
          </div>
        </div>
      </div> 
    );
}