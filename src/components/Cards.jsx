import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Link } from "react-router-dom";

function Cards() {
  const eventsData = [
    {
      id: 1,
      image: "/assets/images/events/efest5.0.png",
    },
    {
      id: 2,
      image: "/assets/images/events/inn2.jpg",
    },
    {
      id: "sparkupsummit",
      image: "/assets/images/events/EFEST6.png",
    },
    {
      id: "comingsoon",
      image: "/assets/images/events/spark.png",
    },
  ];

  return (
    <div id="event" className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white">
          Events
        </h2>
      </div>

      <div className="mt-10 mx-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {eventsData.map((events) => (
            <div key={events.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-lg overflow-hidden h-full w-full max-w-sm shadow-xl">
                <div className="flex flex-col items-center text-center flex-grow relative">
                  <img
                    src={events.image}
                    className="w-full h-full object-cover rounded-3xl p-1"
                    alt="Event"
                  />
                  <div className="absolute bottom-4 w-full flex justify-center">
                  <Link to={(events.id=="comingsoon")?("https:/bh/sparkup.edcellsu.in"):("/"+events.id)}> 
                    <button className="relative hover:scale-105 inline-flex md:h-12 md:w-42 sm:h-10 sm:wd-40 h-10 w-40  lg:h-16 lg:w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
                      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-gray-900 text-white text-xl font-semibold transition-transform duration-300 ">
                        Explore
                      </span>
                    </button>
                  </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
