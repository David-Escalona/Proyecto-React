function Contact() {
    return (
        <div id="fondo" className="flex flex-col items-center justify-center min-h-screen">
            <div className="container text-center mt-12 pt-12 pb-12 mb-12">
                <h1 className="uppercase font-extrabold text-6xl">CONTACT</h1>
                <a href="#Projects" className="bg-violet-600 py-4 px-1 rounded-md uppercase text-white font-bold text-xl shadow-xl inline-block transform rotate-90"></a>
                <div className="text-center text-xl text-gray-700 my-10 mb-14">
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as</p>
                    <p>possible</p>
                </div>
            </div>
            <div className="bg-white p-10 w-full max-w-4xl h-full max-h-screen overflow-auto pb-12 mb-12">
                <form action="/my-handling-form-page" method="post" className="flex flex-col h-full">
                    <ul className="space-y-6 w-full">
                        <li>
                            <label htmlFor="name" className="block text-lg">Name</label>
                            <input type="text" id="name" name="user_name" placeholder="Enter Your Name" className="w-full px-6 py-3 border border-gray-200 rounded-md bg-gray-200"/>
                        </li>
                        <li>
                            <label htmlFor="mail" className="block text-lg">Email</label>
                            <input type="email" id="mail" name="user_mail" placeholder="Enter Your Email" className="w-full px-6 py-3 border border-gray-200 rounded-md bg-gray-200"/>
                        </li>
                        <li>
                            <label htmlFor="msg" className="block text-lg">Message</label>
                            <textarea id="msg" name="user_message" placeholder="Enter Your Message" rows="6" className="w-full px-6 py-3 border border-gray-200 rounded-md bg-gray-200"></textarea>
                        </li>
                    </ul>
                    <div className="flex flex-end items-end justify-end">
                        <a className="bg-violet-600 py-3 px-12 rounded-md uppercase text-white font-bold text-xl shadow-xl hover:bg-violet-700 mt-12">SUBMIT</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;

