import Navbar1 from "../components/Navbar1";
import Kalender from "../components/Kalender";
import Not from "../components/Not";
import Bar from "../components/Bar";

export default function Jadwal() {
    return (
      <>
          <Navbar1 />

        <div className="bg-slate-100 pb-2 pt-3">
            <Kalender ></Kalender>
        </div>

        <Not />

        <Bar />
      </>
    )
  }