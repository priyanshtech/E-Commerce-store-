import Sidebar from "./components/Sidebar";
import Content from "./components/Content";


export default function App() {
  return (
    <>
      <div className="flex h-screen w-screen bg-[#0f0f0f] text-gray-200">
        <Sidebar/>
        <Content/>
      </div>
        

    </>
  );
}
