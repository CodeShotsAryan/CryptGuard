// AboutPage.js

import React from "react";
import "./About.css";
import AboutImg from '../assets/AboutImage.jpg';

function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 flex flex-col items-center pt-11 overflow-y-hidden media-2:pt-24">
      <section className="flex flex-col items-center justify-center gap-8 mb-12">
        <h1 className="text-3xl font-bold text-indigo-900">
          About <span className="text-indigo-600">CryptGuard</span>
        </h1>
        <p className="text-lg text-gray-800 text-center max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam justo sed ante mollis, nec suscipit est accumsan. Vestibulum
          dapibus erat eget urna posuere, nec vehicula nunc vestibulum. Sed nec
          ullamcorper ex.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
          Team Members
        </h2>
        <div className="flex gap-3 flex-wrap justify-center">
          <div className="transform transition duration-500 hover:scale-105">
            <div className="bg-indigo-200 py-4 px-10 rounded">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Aryan Patil
              </h3>
              <p className="text-sm text-indigo-800">Role: Developer</p>
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-105">
            <div className="bg-indigo-200 p-4 rounded">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Sanket Bhandari
              </h3>
              <p className="text-sm text-indigo-800">Role: Designer</p>
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-105">
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
          Email: contact@example.com
          <br />
          Phone: +1234567890
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
