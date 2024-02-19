import React from "react";
import { RiFullscreenLine } from "react-icons/ri";
const GoogleMap = () => {
  // Function to toggle fullscreen view
  const toggleFullscreen = () => {
    const mapIframe = document.getElementById("mapIframe");
    mapIframe.requestFullscreen(); // Browser-specific method for entering fullscreen
  };

  // Function to toggle Pegman (Street View)
  const toggleStreetView = () => {
    const mapIframe = document.getElementById("mapIframe");
    const url = new URL(mapIframe.src);
    const params = url.searchParams;

    // Toggle the presence of Pegman parameters
    if (params.has("pb")) {
      params.delete("pb");
    } else {
      params.set("pb", "!5m2!1sen!2smm!1e1!");
    }

    // Update the iframe source
    mapIframe.src = url.toString();
  };

  return (
    <div className="relative w-full h-[450px]">
      <iframe
        id="mapIframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.9343107930135!2d96.18873077445355!3d16.829614583965498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19370f221e439%3A0xbac83274329185d1!2sWerloop%20IT%20Plaza!5e0!3m2!1sen!2smm!4v1701062401938!5m2!1sen!2smm"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>

      <div className="absolute top-2 right-2">
        <button onClick={toggleFullscreen} className="bg-white p-2">
          <RiFullscreenLine className="text-2xl font-bold text-main-graycolor shadow-md" />
        </button>
      </div>
    </div>
  );
};

export default GoogleMap;
