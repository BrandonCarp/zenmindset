
import DarkModeButton from "../ui/DarkModeButton";
import NavLinks from "./NavLinks";
import Link from "next/link";




export default function Navbar({ log }: { log: string }) {
  return (
    <div className="p-5 ">

      <div className="flex justify-between">
        <Link className="font-semibold text-1xl md:text-2xl" href={"/"}>Zen Mindset</Link>
        {/* Navlinks */}
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <ul className="flex text-[13px] space-x-2 md:text-[1rem]">
              <li className="relative group cursor-pointer">
                <Link href={"/blog"}>Blogs</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full "></span>
              </li>
              <li className="relative group cursor-pointer">
                <Link href={log.toLowerCase()}>{log}</Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className='pl-1'>
                <DarkModeButton />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
