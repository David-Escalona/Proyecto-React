import Iconos from "./templates/Iconos";
import Chat from "./templates/Chat";

function Contact(){
    return (
        
        <div id="fondo" className="flex flex-col items-center justify-center">
            <div className="absolute left-0 flex items-center mt-12 pt-12">
                <Iconos></Iconos>
                <Chat></Chat>
            </div>
            <div className="container text-center mt-12 pt-12 pb-12 mb-12">
                <h1 className="uppercase font-extrabold text-6xl">CONTACT</h1>
                <a href="#Projects" className="bg-violet-600 py-4 px-1 rounded-md uppercase text-white font-bold text-xl shadow-xl inline-block transform rotate-90"></a>
                <div className="text-center text-xl text-gray-700 my-10 mb-14">
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as</p>
                    <p>possible</p>
                </div>
            </div>
            <div className=" bg-white p-5">
                <form action="/my-handling-form-page" method="post">
                    <ul>
                        <li>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="user_name" placeholder="Enter Your Name"/>
                        </li>
                        <li>
                            <label for="mail">Email</label>
                            <input type="email" id="mail" name="user_mail" placeholder="Enter Your Email"/>
                        </li>
                        <li>
                            <label for="msg">Message</label>
                            <textarea id="msg" name="user_message" placeholder="Enter Your Message"></textarea>
                        </li>
                    </ul>
                    <a href="#Projects" className="bg-violet-600 py-2 px-10 rounded-md uppercase text-white font-bold text-xl shadow-xl">CASE STUDY</a>
                </form>
            </div>
        </div>
    )
}
  
export default Contact