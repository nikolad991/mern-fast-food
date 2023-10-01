import React from "react";
import { BiSolidStar } from "react-icons/bi";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <section>
      <div className="w-5/6 mx-auto">
        <div className="flex items-center justify-between h-[500px]">
          <div className="font-yeseva ">
            <h3 className="text-xl">GET IN TOUCH</h3>
            <h1 className="text-6xl py-2">CONTACT</h1>
          </div>
          <div className="h-full">
            <img
              className="h-full w-full object-cover "
              src="https://img.freepik.com/premium-photo/concept-fast-food-isolated-white-background_185193-48704.jpg?w=1380"
              alt=""
             
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between  lg:h-[500px] py-6 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="flex gap-1 text-red-600 ">
                <BiSolidStar />
                <span>ADDRESS</span>
                <BiSolidStar />
              </span>
              <span className="text-2xl">Belgrade Waterfront, Belgrade </span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 text-red-600 ">
                <BiSolidStar />
                <span>OPENING HOURS</span>
                <BiSolidStar />
              </span>
              <span className="text-2xl flex flex-col">
                <span>Monday - Friday: 9AM - 9PM</span>
                <span>Saturday - Sunday: 9AM - 11PM</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 text-red-600 ">
                <BiSolidStar />
                <span>PHONE & EMAIL</span>
                <BiSolidStar />
              </span>
              <span className="text-2xl flex flex-col">
                <span>(00) 000 111 222</span>
                <span>info@food.xyz</span>
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="h-[400px]">
        <iframe
          className="w-full h-full"
          src="https://www.openstreetmap.org/export/embed.html?bbox=20.441753268241882%2C44.79887548981722%2C20.450711846351627%2C44.8021794443683&amp;layer=mapnik&amp;marker=44.80052749074278%2C20.446232557296753"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
