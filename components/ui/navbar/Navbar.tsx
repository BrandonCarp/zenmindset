import DarkModeButton from "../DarkModeButton";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <>
      <div className="p-5 flex justify-between items-center">
        {/* Left navbar section */}
        <div className="flex items-center">
          <h1 className="mx-5 mr-10 text-lg font-semibold">Zen Mindset</h1>
          {/* Us tabs */}
          <ul className="flex space-x-6 text-base font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Who are we</li>
            <li className="hover:text-blue-500 cursor-pointer">Our technologies</li>
            <li className="hover:text-blue-500 cursor-pointer">Our goals</li>
          </ul>
        </div>
        {/* Right navbar section */}
        <div className="flex items-center space-x-8">
          <NavLinks />
          <DarkModeButton />
        </div>
      </div>
    </>
  );
}
