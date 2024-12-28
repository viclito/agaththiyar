"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { about } from "./Data";
import Link from "next/link";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = () => {
  const center = [8.334096877775172, 77.25764528377846]; // Example: Coordinates for Bangalore, India

  return (
    <div style={{maxWidth:'1200px' , margin:'auto' }} className="mx-4" id="contact">
        <div className='w-[100%]'>
            <h2 className='font-semibold text-3xl text-center py-14'>Map for<span className='text-[#7a6b3a]'>{about.name}</span></h2>
        </div>
        <div className="map-container h-[500px] md:h-[350px]" style={{ width: "100%" ,  borderRadius:'20px' , overflow:'hidden' , zIndex:20}}>
        <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" , zIndex:20}}>
            {/* Tile Layer for the map */}
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=""
            />

            {/* Marker Example */}
            <Marker position={center}>
            <Popup>
              <Link href="https://maps.app.goo.gl/TXiMfqdt46BeaufB9" target="_blank">
                Agaththiyar Varmam Hospital <br />
              </Link>
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    </div>
  );
};

export default Map;
