'use client';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/page";

// random recent blog post from last 30 days 
// then 3 small ones next to it
// leads into abunch the slightly bigger size of the 3 small ones 
// under ea blog card have categories



export default function blog() {
  return (<>
    <div className="flex flex-col min-h-screen">
      <Navbar log="Sign Out" />
      <div className="flex-grow mb-10 sm:mb-0">
        <div className="mt-10 flex items-center justify-center  md:mt-[5rem]">
          <div className="px-[10%] text-center ">
            <h1 className="font-semibold text-2xl tracking-tight xs:text-3xl sm:text-5xl ">You cannot alter your fate. However, you can rise to meet it.</h1>
            <p className="text-center font-semibold text-md mt-5 text-indigo-500 xs:text-1xl md:text-2xl ">
              Optimize your focus. <span className="block xs:inline">Elevate your workflow.</span>
            </p>
          </div>

        </div>
      </div>

      <Footer />

    </div>

  </>)
}
{/* <Navbar log="Sign Out" />
<div className="mt-10 flex items-center justify-center  md:mt-[5rem]">
  <div className="px-[10%] text-center ">
    <h1 className="font-semibold text-2xl tracking-tight xs:text-3xl sm:text-5xl ">You cannot alter your fate. However, you can rise to meet it.</h1>
    <p className="text-center font-semibold text-md mt-5 text-indigo-500 xs:text-1xl md:text-2xl ">
      Optimize your focus. <span className="block xs:inline">Elevate your workflow.</span>
    </p>
  </div>

</div> */}


//  <div className="flex flex-col min-h-screen">
//       <Navbar log="Login" />
//       <div className="flex-grow mb-10 sm:mb-0">
//         <HeroSection />
//       </div>

//       <Footer />

//     </div>
// xs: "375px",
// ss: "575px",
// sm: "680px",
// md: "860px",
// lg: "1200px",
// lgsm: "1300px",
// lgmd: "1400px",
// xl: "1700px",