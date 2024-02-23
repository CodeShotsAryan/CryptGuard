// AboutPage.js

import React from "react";
import "./About.css";
import AboutImg from  '../assets/AboutImage.jpg';

function AboutPage() {
  return (
    <div className=" bg-bg-color1 h-custom-height1 flex items-center justify-center gap-8">
      <section className="About-info">
        <h1 className=" font-bold text-3xl">
          About <span className="text-logo-color">CryptGuard</span>
        </h1>
        <p className="font-medium text-lg w-text1-width mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam justo sed ante mollis, nec suscipit est accumsan. Vestibulum
          dapibus erat eget urna posuere, nec vehicula nunc vestibulum. Sed nec
          ullamcorper ex.
        </p>
      </section>
      <section className="About-info-img">
        <img src={AboutImg}/>
      </section>
      {/* <section className='mb-12'>
        <h1 className='text-3xl font-semibold mb-4'>Project Overview</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam
          justo sed ante mollis, nec suscipit est accumsan. Vestibulum dapibus
          erat eget urna posuere, nec vehicula nunc vestibulum. Sed nec
          ullamcorper ex.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>Team Members</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <li className='transform transition duration-500 hover:scale-105'>
            <div className='bg-gray-200 p-4 rounded'>
              <h3 className='text-lg font-semibold mb-2'>John Doe</h3>
              <p className='text-sm'>Role: Developer</p>
            </div>
          </li>
          <li className='transform transition duration-500 hover:scale-105'>
            <div className='bg-gray-200 p-4 rounded'>
              <h3 className='text-lg font-semibold mb-2'>Jane Smith</h3>
              <p className='text-sm'>Role: Designer</p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
        <p className='text-lg'>
          For inquiries or support, please contact us at:
          <br />
          Email: contact@example.com
          <br />
          Phone: +1234567890
        </p>
      </section> */}
    </div>
  );
}

export default AboutPage;
