import Navbar from "../components/Navbar";
import ProfilCard from "../components/ProfilCard";
import Menu from "../components/Menu";
import Presensi from "../components/Presensi";
import Aktivitas from "../components/Aktivitas";
import Statistik from "../components/Statistik";
import Bar from "../components/Bar";


export default function Home() {
  return (
    <>
        <Navbar />
        <ProfilCard />
        <Menu />
        <Presensi />
        <Aktivitas />
        <Statistik />
        <Bar />
    </>
  )
}
