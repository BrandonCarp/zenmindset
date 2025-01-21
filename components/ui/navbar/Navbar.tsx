
import DarkModeButton from "../DarkModeButton";
import NavLinks from "./NavLinks";
import ZenLinks from "./ZenLinks";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center py-5 ">

      <div className="flex justify-between items-center  space-x-8 border border-gray-500 rounded-full px-6 py-3 md:w-[30rem]  lg:w-[50rem]">

        <h1 className="font-semibold text-lg md:text-base ">Zen Mindset</h1>


        <NavLinks />

      </div>
    </div>
  );
}
