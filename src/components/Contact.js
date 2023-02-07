import React from "react";



export default function Contact() {
  
    return (
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-3xl font-medium mb-5">Contact Me</h2>
          <form className="w-64 bg-gray-200 p-5 rounded-lg shadow-md">
            <input type="text" placeholder="Name" className="w-full py-2 px-3 my-2 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full py-2 px-3 my-2 rounded-lg" />
            <textarea placeholder="Message" className="w-full py-2 px-3 my-2 rounded-lg h-32"></textarea>
            <button type="submit" className="w-full py-2 px-3 my-2 rounded-lg bg-green-500 text-white">Submit</button>
          </form>
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-3">Follow me on:</h3>
            <div className="flex">
              <a href="https://www.github.com/markotuya0" target="_blank" rel="noopener noreferrer" className="text-3xl mx-3">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.twitter.com/mark__anthonny" target="_blank" rel="noopener noreferrer" className="text-3xl mx-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/mark-otuya" target="_blank" rel="noopener noreferrer" className="text-3xl mx-3">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
    );
  }
  