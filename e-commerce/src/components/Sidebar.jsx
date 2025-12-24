export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen w-56 shrink-0 border-r">
      
      <div className="h-10 flex items-center justify-center font-semibold">
        Chats
      </div>

      <ul className="flex-1 overflow-y-auto px-2 text-sm">
        <li className="py-1">New chat</li>
        <li className="py-1">Search chat</li>
        <li className="py-1">Images</li>
        <li className="py-1">Apps</li>
        <li className="py-1">GPTs</li>
        <li className="py-1">Projects</li>
      </ul>

    </aside>
  );
}
