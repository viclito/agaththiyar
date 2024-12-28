"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { about } from "./Data";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue dynamically
const setupLeafletIcons = () => {
  if (typeof window !== "undefined") {
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }
};

// Dynamic import of MapContainer and child components
const MapContainerWithNoSSR = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

const Map = () => {
  useEffect(() => {
    setupLeafletIcons();
  }, []);

  const center = [8.334096877775172, 77.25764528377846]; // Example coordinates

  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }} className="mx-4" id="contact">
      <div className="w-[100%]">
        <h2 className="font-semibold text-3xl text-center py-14">
          Map for <span className="text-[#7a6b3a]">{about.name}</span>
        </h2>
      </div>
      <div className="map-container h-[500px] md:h-[350px]" style={{  maxHeight: "500px", borderRadius: "20px", overflow: "hidden", zIndex: 20 }}>
        <MapContainerWithNoSSR center={center} zoom={13} style={{ height: "100%", width: "100%", zIndex: 20 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              <Link href="https://maps.app.goo.gl/TXiMfqdt46BeaufB9" target="_blank">
                <strong>Agaththiyar Varmam Hospital</strong>
              </Link>
            </Popup>
          </Marker>
        </MapContainerWithNoSSR>
      </div>
    </div>
  );
};

export default Map;