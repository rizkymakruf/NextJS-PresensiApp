export default function Not(){
    return(
        <div className="fixed bottom-0 right-0 left-0 mb-20">
          <div className="grid justify-items-center">
            <img src="img/not.svg" className="h-60 w-60"/>
          </div>
          <div className="grid justify-items-center">Data Tidak Ditemukan</div>
          <div className="grid justify-items-center text-sm text-slate-400"><i class="bi bi-arrow-clockwise"></i>Tap Untuk Coba Lagi</div>
        </div>
    );
}