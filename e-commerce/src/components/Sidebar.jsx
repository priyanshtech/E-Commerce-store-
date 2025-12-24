export default function Sidebar() {
    return (<div className="flex flex-col h-screen w-70  bg-[#171717] border-r border-white/10 text-gray-300">
        <h1 className="h-10 px-10 flex justify-center items-center shadow-md rounded-lg text-lg">Chats</h1>
        <ul className="flex-1 overflow-y-auto overflow-x-hidden break-words">
            <li className="px-1 py-1 text-lg"> New chat</li>
            <li className="px-1 py-1 text-lg"> Search chat</li>
            <li className="px-1 py-1 text-lg"> Images</li>
            <li className="px-1 py-1 text-lg"> Apps</li>
            <li className="px-1 py-1 text-lg">GPTs</li>
            <li className="px-1 py-1 text-lg">Projects</li>

            
        </ul>

    </div>);
}