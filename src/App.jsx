import Topbar from "./components/Topbar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="bg-[#FAF9F6] w-screen h-screen flex flex-col font-josefin scroll-x-hidden ">
      <div className="w-full ">
        <Topbar />
      </div>
      <div className="w-full pb-5">
        <Home />
      </div>
    </div>
  )
}

export default App
