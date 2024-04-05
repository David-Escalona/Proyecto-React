import Iconos from "./templates/Iconos";
import Chat from "./templates/Chat";

function Home(){
    return (
        
        <div id="fondo" className="flex flex-col items-center justify-center">
            <div className="absolute left-0 flex items-center">
                <Iconos></Iconos>
                <Chat></Chat>
            </div>
            <div className="container text-center mt-12 pt-12 pb-12 mb-12">
                <h1 className="uppercase font-extrabold text-6xl">HEY, I´AM DAVID ESCALONA GARCÍA</h1>
                <div className="text-center text-xl text-gray-700 my-10 mb-14">
                    <p>A Result-Oriented Web Developer building and managing Websites and Web</p>
                    <p>Applications that leads to the success of the overall product</p>
                </div>
                <a href="#Projects" className="bg-violet-600 py-4 px-20 rounded-md uppercase text-white font-bold text-xl shadow-xl">PROJECTS</a>
            </div>
            <div className="rounded-xl h-10 w-6 border-2 border-slate-700 mt-12 mb-12">
                <div className="w-1.5 h-1.5 rounded-lg bg-slate-500 mx-auto mt-2"></div>
            </div>
        </div>
    )
}
  
export default Home