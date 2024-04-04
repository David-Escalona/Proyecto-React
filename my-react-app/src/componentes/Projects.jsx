import Portatil1 from "./templates/Portatil1"

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

                <div className="columns-2 flex justify-center ms-12 ps-12">
                    <div className="text-start w-full">
                        <Portatil1></Portatil1>
                    </div>
                    <div className="text-start w-full">
                        <h3 className="text-3xl font-extrabold">Dopefolio</h3>
                        <div className="flex flex-wrap gap-3 mt-8 pr-20">
                            <div className="text-center text-xl text-gray-700 my-10 mb-12 mt-1">
                                <p>Dopefolio is a successful Open-Source project that I created</p>
                                <p>which have been featured on some of the biggest tech sites</p>
                                <p>like CSS-Tricks, Hostinger, etc & used by thousands of</p>
                                <p>developers globally</p>
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