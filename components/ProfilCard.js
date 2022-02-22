export default function ProfilCard() {
    return(
        <div className="bg-green-400 pb-3">
            <div className="container">
            <center>
            <div className="flex w-[90%] mt-12"> 
                <div className="text-white w-8/12 pl-2 mb-2 pt-2 text-sm text-left">PT Semua Kopi Indonesia</div>
                <div className="text-right text-white w-4/12 pr-2 pt-2 mb-2 text-sm">07.00</div>
            </div>
            </center>
            <div className="flex items-center justify-center">
                <div class="flex items-center bg-white w-[90%] pt-3 pb-3 rounded-lg drop-shadow-md">
                <img src="img/pp.png" className="w-[3rem] mr-2 ml-4"/>
                <div>
                    <span className="font-bold text-sm">Andrew Alfred</span> <br/>
                    <span className="text-sm">Lain-Lain</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}