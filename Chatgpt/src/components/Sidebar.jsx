import { SiOpenai } from "react-icons/si"
import { BsLayoutSidebar } from "react-icons/bs"
import {
  RiEditBoxLine,
  RiSearchLine,
  RiImageLine,
  RiApps2Line,
  RiGroupLine,
  RiBox3Line
} from "react-icons/ri"

export default function Sidebar({ chatHistory, setChatHistory, open, setOpen }) {
  return (
    <div className={`flex flex-col h-screen transition-all duration-300 border-r border-white/10 text-white bg-[#181818] ${open ? "w-72" : "w-0 overflow-hidden border-none"}`}>

      {/* Header */}
      <div className="h-16 px-4 flex items-center rounded-lg text-lg flex-shrink-0">
        <SiOpenai size={26} />
        <BsLayoutSidebar size={20} className="ml-auto cursor-pointer hover:text-gray-400 " onClick={() => setOpen(!open)} />
      </div>

      {/* Menu */}
      <ul className="flex-1 overflow-y-auto px-4 overflow-x-hidden break-words space-y-4">

        <div className="flex items-center gap-3">
          <RiEditBoxLine size={22} />
          <li className="text-sm">New chat</li>
        </div>

        <div className="flex items-center gap-3">
          <RiSearchLine size={22} />
          <li className="text-sm">Search chat</li>
        </div>

        <div className="flex items-center gap-3">
          <RiImageLine size={22} />
          <li className="text-sm">Images</li>
        </div>

        <div className="flex items-center gap-3">
          <RiApps2Line size={22} />
          <li className="text-sm">Apps</li>
        </div>

        <div className="flex items-center gap-3">
          <RiGroupLine size={22} />
          <li className="text-sm">GPTs</li>
        </div>

        <div className="flex items-center gap-3">
          <RiBox3Line size={22} />
          <li className="text-sm">Projects</li>
        </div>
        <div >
          <p className="text-sm text-gray-400 mt-8">Your chats</p>
          {chatHistory.map((chat, index) => (
            <div key={index} className="mt-4">
              <p className="text-lg mt-1">{chat.content.trim().slice(0, 20)}</p>
            </div>
          ))}
        </div>

      </ul>


    </div>
  )
}
