import ID from "./templates/ID";

function Header(){
    return (
      <div className="flex justify-around py-4 bg-white shadow-md">
          <ID></ID>
          <div className="flex justify-end w-2/3 mt-4 space-x-10 ">
              <a href="#Home" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">HOME</a>
              <a href="#About" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">ABOUT</a>
              <a href="#Projects" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">PROJECTS</a>
              <a href="#Contact" className="text-base text-gray-700 font-bold hover:text-purple-600 transition duration-500">CONTACT</a>
          </div>
      </div>
    )
}
  
export default Header