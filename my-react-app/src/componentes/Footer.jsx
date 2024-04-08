import IconosHorizontal from "./templates/IconosHorizontal"

function Footer(){
    return (
        
        <div className="bg-black text-white p-12">
            <div className="columns-2 mt-12">
                <div className="flex justify-start text-start flex-start">
                    <h1 className="text-3xl">DAVID ESCALONA GARCÍA</h1>
                </div>
                <div className="flex justify-end text-end flex-end">
                    <p className="text-3xl">SOCIAL</p>
                </div>
            </div>

            <div className="columns-2 mt-5">
                <div className="flex justify-start text-start flex-start">
                    <p className="flex justify-start text-start flex-start">A Frontend focused Web Developer building the Frontend of Websites and</p>
                </div>
                <div className="flex justify-end text-end flex-end">
                    <IconosHorizontal></IconosHorizontal>
                </div>
            </div>

            <div className="columns-2 mt-1 mb-10">
                <div className="flex justify-start text-start flex-start">
                <p className="flex justify-start text-start flex-start">Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="text-end w-full">
                </div>
            </div>
            <br/>
            <hr/>
            <div className="flex justify-center mt-12">
                <p>© Copyright 2024 . Made by David Escalona García</p>
            </div>
            
        </div>
        
        
        
    )
}
  
export default Footer