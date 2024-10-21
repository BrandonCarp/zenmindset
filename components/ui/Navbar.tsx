import DarkModeButton from "./DarkModeButton"

export default function Navbar() {
  return (
    <>
      <div className="p-5 flex justify-between">
        {/* Left navbar section */}
        <div className="flex">
          <h1 className="mx-5 mr-10">Zen Mindset</h1>
          {/* Us tabs */}
          <ul className="flex space-x-3">
            <li>Who are we</li>
            <li>Our technologies</li>
            <li>Our goals</li>
          </ul>
        </div>
        {/* Right navbar section */}
        <div className="flex space-x-5 ">
          <ul className="flex space-x-3">
            <li>Calendar</li>
            <li>Music</li>
            <li className="">Notes</li>
            <li>User options here</li>
          </ul>
          <DarkModeButton />
        </div>

      </div>

    </>
  )
}