import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    const container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("map", {
      zoomControl: false, 
    }).setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);


    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="map-container">
        <div className="location-card">
            {/* <img src="Location.png"/> */}
            <p><p className="mcd">McDonald's<br/></p>South London</p>
        </div>
      <div className="info-card">
        <h2>McDonald's</h2>
        <p className="location">South London</p>
        <p className="loc-1">Tooley St, London Bridge, London SE1 2TF,<br/> <p>United Kingdom</p></p>
        <p className="loc-2"><strong>Phone number</strong><br/> <p>+934443-43</p></p>
        <p className="loc-3">
          <strong>Website<br/></strong>{" "}
          <p><a href="http://mcdonalds.uk/" target="_blank" rel="noopener noreferrer" className="loc-4">
            http://mcdonalds.uk/
          </a></p>
        </p>
      </div>

      <div id="map" className="map"></div>
    </div>
  );
};

export default MapComponent;
