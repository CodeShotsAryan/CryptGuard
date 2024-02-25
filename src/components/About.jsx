// AboutPage.js

import React from "react";
import "./About.css";
import AboutImg from '../assets/AboutImage.jpg';

function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 flex flex-col items-center pt-11 overflow-y-hidden">
      <section className="flex flex-col items-center justify-center gap-8 mb-12">
        <h1 className="text-3xl font-bold text-indigo-900">
          About <span className="text-indigo-600">CryptGuard</span>
        </h1>
        <p className="text-lg text-gray-800 text-center max-w-lg">
        CryptGuard is your trusted partner in digital security. Our mission is simple: to empower individuals and businesses to protect their sensitive information and maintain their privacy online.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
          Team Members
        </h2>
        <div className="flex gap-3 flex-wrap justify-center">
          <div className="transform transition duration-500 hover:scale-105 cursor-pointer">
            <div className="bg-indigo-200 py-4 px-10 rounded">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Aryan Patil
              </h3>
              <p className="text-sm text-indigo-800">Role: Developer</p>
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-105 cursor-pointer">
            <div className="bg-indigo-200 p-4 rounded">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Sanket Bhandari
              </h3>
              <p className="text-sm text-indigo-800">Role: Designer</p>
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-105 cursor-pointer">
            <div className="bg-indigo-200 p-4 rounded">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Avishkar Kakade
              </h3>
              <p className="text-sm text-indigo-800">Role: Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-gray-800">
          For inquiries or support, please contact us at:
          <br />
          Email: cryptguardprotect@com
          <br />
          Phone: 8169964459
        </p>
        <div className="get-in-touch">
        <p className="text-center">Have questions? Reach out to us <a href="contact.html" className="text-blue-500">here</a>!</p>
      </div>
      </section>
    </div>
  );
}

export default AboutPage;
