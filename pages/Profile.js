import Navbar from "../components/Navbar";
import ProfilCard1 from "../components/ProfilCard1";
import DataDiri from "../components/DataDiri";
import TempatPresensi from "../components/TempatPresensi";
import Bar from "../components/Bar";

export default function Profile() {
    return (
      <>
          <Navbar />
          <ProfilCard1 />
          
        <div className="-mt-8">
            <div className="container items-center justify-center">
                <img src="img/pp.png" className="w-20 mr-2 ml-4"/>
                <div>
                    <span className="font-bold text-sm ml-4">Andrew Alfred</span> <br/>
                    <span className="text-sm ml-4">Lain-Lain</span>
                    <span className="text-xs ml-4">PT. Semua Kopi Indonesia</span>
                </div>
            </div>
        </div>

        <DataDiri />
        <TempatPresensi />
        <Bar />

      </>
    )
  }