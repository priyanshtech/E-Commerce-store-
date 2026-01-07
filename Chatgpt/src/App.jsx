import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";


export default function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex h-screen w-screen bg-[#0f0f0f] text-gray-200">
        <Sidebar chatHistory={chatHistory} open={open} setOpen={setOpen} />
        <Content chatHistory={chatHistory} setChatHistory={setChatHistory} open={open} setOpen={setOpen} />
      </div>


    </>
  );
}
