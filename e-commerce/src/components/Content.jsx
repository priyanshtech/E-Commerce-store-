export default function Content() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      
      {/* Header */}
      <header className="h-10 flex items-center px-4 shrink-0">
        <div className="text-xl flex items-center">
          <h3>ChatGPT 5.3 ∨</h3>
        </div>

        <div className="flex items-center gap-4 ml-auto text-sm">
          <span>Share</span>
          <span>Add people</span>
          <span>Personalize</span>
        </div>
      </header>

      {/* Center content */}
      <main className="flex flex-1 items-center justify-center">
        <p className="text-base">Where should we begin?</p>
      </main>

      {/* Input */}
      <div className="w-full px-4">
        <div className="mx-auto flex items-center gap-3 rounded-full shadow-md px-4 py-3 w-full max-w-3xl">
          <button className="text-2xl">+</button>
          <input
            className="flex-1 h-10 outline-none text-base"
            placeholder="Ask anything"
          />
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center mt-2 mb-4">
        ChatGPT can make mistakes. Check important info. See Cookie Preferences.
      </p>
    </div>
  );
}
