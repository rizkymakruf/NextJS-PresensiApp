export default function Statik(){
    return(
        
        <div className="bg-slate-100 pb-2 pt-2 grid grid-cols-1 justify-items-center">
            <div className="container grid w-[90%]">
                
                <div className="content-center mx-auto w-[90%] bg-slate-300 fixed rounded-lg  font-invisible grid grid-cols-6 h-10">
                        <div className="grid justify-items-center">Jan</div>
                        <div className="grid justify-items-center">Feb</div>
                        <div className="grid justify-items-center">Mar</div>
                        <div className="grid justify-items-center">Apr</div>
                        <div className="grid justify-items-center">Mei</div>
                        <div className="grid justify-items-center">Jun</div>
                </div>
                <div className="content-center mx-auto w-[90%] fixed  rounded-lg  font-invisible grid grid-cols-6 ">
                    <div className="grid justify-items-center bg-green-500 rounded-lg text-white text-bold h-10 items-center">Jan</div>
                </div>
            </div>
        </div>
    );
}