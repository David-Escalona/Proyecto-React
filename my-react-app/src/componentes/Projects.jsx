import Portatil1 from "./templates/Portatil1";
import Portatil2 from "./templates/Portatil2";
import Portatil3 from "./templates/Portatil3";
import Portatil4 from "./templates/Portatil4";

function Projects(){
    return (
        <div className="flex justify-around py-4 bg-white shadow-md">
        <div className="container text-center mt-12 pt-12 pb-12 mb-12">
                <h1 className="uppercase font-extrabold text-6xl">PROJECTS</h1>
                <a href="#Projects" className="bg-violet-600 py-4 px-1 rounded-md uppercase text-white font-bold text-xl shadow-xl inline-block transform rotate-90"></a>
                <div className="text-center text-xl text-gray-700 my-10 mb-12 mt-1">
                    <p>Here you will find some of the personal and clients projects that I created with each project</p>
                    <p>containing its own case study</p>
                </div>

                <div className="columns-2 flex justify-center ms-12 ps-12 mb-12 pb-12">
                    <div className="text-start w-full">
                        <Portatil1></Portatil1>
                    </div>
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">Dopefolio</h3>
                        <div className="flex flex-wrap gap-3 mt-8 pr-20">
                            <div className="text-xl text-gray-700 my-10 mb-6 mt-1">
                                <p>Dopefolio is a successful Open-Source project that I created</p>
                                <p>which have been featured on some of the biggest tech sites</p>
                                <p>like CSS-Tricks, Hostinger, etc & used by thousands of</p>
                                <p>developers globally</p>
                            </div>
                            <a href="#Projects" className="bg-violet-600 py-2 px-10 rounded-md uppercase text-white font-bold text-xl shadow-xl">CASE STUDY</a>
                        </div>
                    </div>
                </div>

                <div className="columns-2 flex justify-center ms-12 ps-12 mb-12 pb-12">
                    <div className="text-start w-full me-3">
                        <Portatil2></Portatil2>
                    </div>
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">Wilsonport</h3>
                        <div className="flex flex-wrap gap-3 mt-8 pr-20">
                            <div className="text-xl text-gray-700 my-10 mb-12 mt-1">
                                <p>Wilsonport is a multiservice logistics and transport</p>
                                <p>company and I created their website from scratch using the</p>
                                <p>frontend tools I know.</p>
                            </div>
                            <a href="#Projects" className="bg-violet-600 py-2 px-10 rounded-md uppercase text-white font-bold text-xl shadow-xl">CASE STUDY</a>
                        </div>
                    </div>
                </div>

                <div className="columns-2 flex justify-center ms-12 ps-12 mb-12 pb-12">
                    <div className="text-start w-full me-3">
                        <Portatil3></Portatil3>
                    </div>
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">Boreal Coffee Clone</h3>
                        <div className="flex flex-wrap gap-3 mt-8 pr-20">
                            <div className="text-xl text-gray-700 my-10 mb-12 mt-1">
                                <p>I re-created the frontend of Boreal Coffee's official web app</p>
                                <p>because I got attracted to their beautiful UI. It was a great</p>
                                <p>experience for me to build the entire frontend.</p>
                            </div>
                            <a href="#Projects" className="bg-violet-600 py-2 px-10 rounded-md uppercase text-white font-bold text-xl shadow-xl">CASE STUDY</a>
                        </div>
                    </div>
                </div>

                <div className="columns-2 flex justify-center ms-12 ps-12">
                    <div className="text-start w-full me-3">
                        <Portatil4></Portatil4>
                    </div>
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">Crown Template</h3>
                        <div className="flex flex-wrap gap-3 mt-8 pr-20">
                            <div className="text-xl text-gray-700 my-10 mb-12 mt-1">
                                <p>Crown is a web template that I created targeting the</p>
                                <p>restaurant and food industry which anyone can use to</p>
                                <p>present their business online.</p>
                            </div>
                            <a href="#Projects" className="bg-violet-600 py-2 px-10 rounded-md uppercase text-white font-bold text-xl shadow-xl">CASE STUDY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects