import DarkModeButton from "../DarkModeButton";
import NavLinks from "./NavLinks";
import ZenLinks from "./ZenLinks";

export default function Navbar() {
  return (
    <>
      <div className="p-5 flex justify-between items-center">
        <ZenLinks />
        <div className="flex items-center space-x-8">
          <NavLinks />
          <DarkModeButton />
        </div>
      </div>
    </>
  );
}  
