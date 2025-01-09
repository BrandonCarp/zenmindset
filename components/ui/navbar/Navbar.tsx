import DarkModeButton from "../DarkModeButton";
import NavLinks from "./NavLinks";
import ZenLinks from "./ZenLinks";

export default function Navbar() {
  return (
    <>
      <div className=" flex justify-between items-center p-3">
        <h1 className="semi-bold">Zen Mindset</h1>
        <div className="flex items-center ">
          <NavLinks />

        </div>
      </div>
    </>
  );
}  
