export default function Navbar1() {
    return (
        <div className="bg-green-400">
        <div className="container relative mb-10">
          <div className="bg-green-400 fixed top-0 w-full z-40 bg-fixed">
          <div className="flex">
            <div className="w-6/12 flex pl-5 pt-3 pb-3 ">
              <div className=" text-white font-semibold">
                Februari 2022
              </div>
            </div>
            <div className="w-6/12 pr-6 text-white pt-3 pb-3 text-right">
            <i class="bi bi-calendar-week"></i>
            </div>
          </div>
          </div>
        </div>
      </div> 
    );
}