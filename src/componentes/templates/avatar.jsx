import React from "react";

function avatar(){
    return(
    <div>
        <a className="flex ml-4" href="https://github.com/David-Escalona" target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="/fondoBlanco.svg" alt="avatar" className="object-cover w-full h-full" />
            </div>
            <h1 className="mt-2 ml-4 text-base text-gray-700 font-bold pt-1.5 hover:text-purple-600 transition duration-500">David Escalona García</h1>
        </a>
    </div>
    )
}

export default avatar;