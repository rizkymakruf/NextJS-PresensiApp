export default function Menu() {
    return(
        <div className="bg-slate-100 pb-2 pt-3">
        <div className="container">
            <div class="content-center bg-white w-[90%] pt-3 pb-3 rounded-lg m-3 mx-auto drop-shadow-md">
              <center>
                <div class="flex mb-2">
                  <div class="flex-1">
                    <img src="img/user-checklist.svg" className="w-12 item-center"/>
                    <small className="text-xs text-center">Presensi</small>
                  </div>
                    <div class="flex-1">
                      <img src="img/lembur.svg" className="w-12 item-center"/>
                      <small className="text-xs text-center">Mulai Lembur</small>
                    </div>
                    <div class="flex-1">
                      <img src="img/istirahat.svg" className="w-12 item-center"/>
                      <small className="text-xs text-center">Istirahat</small>
                    </div>
                    <div class="flex-1">
                      <img src="img/izin dan cuti.svg" className="w-12 item-center"/>
                      <small className="text-xs text-center">Izin & Cuti</small>
                    </div>
                </div>

                <div class="flex">
                  <div class="flex-1">
                    <img src="img/pulang.svg" className="w-12 item-center"/>
                    <small className="text-xs text-center">Pulang</small>
                  </div>
                    <div class="flex-1">
                      <img src="img/selesai-lembur.svg" className="w-12 item-center"/>
                      <small className="text-xs text-center">Selesai Lembur</small>
                    </div>
                    <div class="flex-1">
                      <img src="img/kembali-kerja.svg" className="w-12 item-center"/>
                      <small className="text-xs text-center">Kembali Kerja</small>
                    </div>
                    <div class="flex-1">
                      <img src="img/lain-lain.svg" className="w-12 item-center"/>
                      <small className="text-xs text-center">Lainnya</small>
                    </div>
                </div>
              </center>
            </div>
        </div>
      </div>
    );
}