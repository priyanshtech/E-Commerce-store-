import { FaArrowUp, FaPlus } from "react-icons/fa6";
import { BsLayoutSidebar } from "react-icons/bs"
import { useState } from "react";
export default function Content({ chatHistory, setChatHistory, open, setOpen }) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMessage = input;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setResponse("⚠️ API Quota Exceeded. Please check your Gemini API limits.");
      } else {
        setResponse(data.reply || "No response received.");
      }
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
      setChatHistory((prev) => [...prev, { role: "user", content: userMessage }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#212121] w-full font-sans">
      <header className="h-10 flex items-center px-4 mt-2 border-b border-neutral-700
">
        {/* Left side */}
        <div className="text-xl text-gray-200 flex items-center font-semibold">
          {!open && (
            <div className="mr-3 p-2 hover:bg-[#2f2f2f] rounded-lg cursor-pointer flex items-center justify-center transition-all duration-300" onClick={() => setOpen(true)}>
              <BsLayoutSidebar size={20} />
            </div>
          )}
          <h3 className="cursor-pointer hover:bg-[#2f2f2f] px-3 py-1 rounded-lg transition-all">ChatGPT 5.3 ∨</h3>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 ml-auto text-gray-400 text-sm ">
          <h3 className="cursor-pointer hover:text-white">Share</h3>
          <h3 className="cursor-pointer hover:text-white">Add people</h3>
          <h3 className="cursor-pointer hover:text-white">Personalize</h3>
        </div>
      </header>

      <div className="flex-1 mx-4 md:mx-20 flex flex-col overflow-hidden">
        <div className={`flex-1 max-w-3xl w-full mx-auto overflow-y-auto flex flex-col px-4 py-8 ${!response && !loading ? 'justify-center items-center' : 'justify-start'
          }`}>
          <div className="w-full">
            <p className={`text-white text-xl whitespace-pre-wrap leading-relaxed ${!response && !loading ? 'text-center' : 'text-left'
              }`}>
              {loading
                ? <span className="animate-pulse text-gray-400">Thinking...</span>
                : response || "Where should we begin?"}
            </p>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto flex flex-col items-center bg-[#2f2f2f] rounded-[26px] p-2 mb-4 shadow-sm">
          <div className="w-full flex items-center gap-2 pl-3">
            <button className="text-gray-400 hover:text-white hover:bg-[#3f3f3f] p-2 rounded-full transition-all flex items-center justify-center">
              <FaPlus />
            </button>
            <input
              className="flex-1 h-12 bg-transparent outline-none text-white text-[16px] placeholder-gray-500 font-normal px-2"
              placeholder="Ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${input.trim() && !loading
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-[#3d3d3d] text-gray-500'
                }`}
            >
              <FaArrowUp className="text-lg font-bold" />
            </button>
          </div>
        </div>

        <div className="text-[12px] text-gray-500 flex justify-center mb-4 tracking-tight">
          ChatGPT can make mistakes. Check important info. See Cookie Preferences.
        </div>
      </div>
    </div>
  );
}
