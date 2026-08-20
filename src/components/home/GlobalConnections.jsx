import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { FaPlus, FaMinus, FaCompress, FaGlobeAfrica, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import '../../css/global-connections.css';

// ─── Geographic Connections Data ─────────────────────────────
export const GLOBAL_CONNECTIONS = [
  {
    id: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    coordinates: [-1.2921, 36.8219],
    type: "hub",
    title: "Moi Educational Centre",
    subTitle: "Nairobi, Kenya",
    tag: "MEC Global Hub",
    description: "Primary MEC Headquarters & flagship campus driving academic excellence, innovation, and global learning pathways."
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    coordinates: [51.5074, -0.1278],
    type: "partner",
    title: "Cambridge & Pearson Network",
    subTitle: "London, UK",
    tag: "International Connection",
    description: "Direct academic progression to Cambridge Assessment International Education & Pearson Edexcel qualifications."
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    coordinates: [25.2048, 55.2708],
    type: "network",
    title: "Middle East Education Hub",
    subTitle: "Dubai, UAE",
    tag: "Regional Network",
    description: "Global student exchange, sports academies, and international school network connections."
  },
  {
    id: "kualalumpur",
    city: "Kuala Lumpur",
    country: "Malaysia",
    coordinates: [3.1390, 101.6869],
    type: "network",
    title: "Asia-Pacific Academic Link",
    subTitle: "Kuala Lumpur, Malaysia",
    tag: "Global Network",
    description: "International learning partnerships and global university pathway programs."
  },
  {
    id: "johannesburg",
    city: "Johannesburg",
    country: "South Africa",
    coordinates: [-26.2041, 28.0473],
    type: "network",
    title: "African Leadership Network",
    subTitle: "Johannesburg, South Africa",
    tag: "Continental Network",
    description: "Regional educational alliances and intra-African youth leadership exchanges."
  },
  {
    id: "newyork",
    city: "New York",
    country: "United States",
    coordinates: [40.7128, -74.0060],
    type: "network",
    title: "North America University Link",
    subTitle: "New York, USA",
    tag: "University Pathway",
    description: "Global university placement network connecting MEC alumni to North American institutions."
  }
];

// ─── Bezier Curve Arc Generator ──────────────────────────────
const getCurvedArc = (start, end, numPoints = 50, curvature = 0.25) => {
  const [lat1, lon1] = start;
  const [lat2, lon2] = end;
  
  const midLat = (lat1 + lat2) / 2;
  const midLon = (lon1 + lon2) / 2;
  
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const normalLat = -dLon * curvature;
  const normalLon = dLat * curvature;
  
  const controlLat = midLat + normalLat;
  const controlLon = midLon + normalLon;
  
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * controlLat + t * t * lat2;
    const lon = (1 - t) * (1 - t) * lon1 + 2 * (1 - t) * t * controlLon + t * t * lon2;
    points.push([lat, lon]);
  }
  return points;
};

// ─── Custom HTML DivIcons ─────────────────────────────────────
const createCustomMarkerIcon = (connection, isSelected) => {
  const isHub = connection.type === "hub";
  const isPartner = connection.type === "partner";
  
  let markerClass = "mec-map-marker";
  if (isHub) markerClass += " hub-marker";
  else if (isPartner) markerClass += " partner-marker";
  else markerClass += " network-marker";

  if (isSelected) markerClass += " is-selected";

  const html = `
    <div class="${markerClass}">
      <div class="marker-pulse-ring"></div>
      <div class="marker-core-dot"></div>
      ${isHub ? '<span class="marker-hub-badge">MEC</span>' : ''}
    </div>
  `;

  return L.divIcon({
    html: html,
    className: 'custom-leaflet-marker-wrap',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20]
  });
};

// ─── Leaflet Map Controls Component ──────────────────────────
const MapController = ({ centerPoint, zoomLevel }) => {
  const map = useMap();
  useEffect(() => {
    if (centerPoint) {
      map.flyTo(centerPoint, zoomLevel, { duration: 1.2 });
    }
  }, [centerPoint, zoomLevel, map]);
  return null;
};

// ─── Travelling Dot Component for Animated Route ──────────────
const TravelingDot = ({ arcPoints }) => {
  const [pointIndex, setPointIndex] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !arcPoints || arcPoints.length === 0) return;

    const interval = setInterval(() => {
      setPointIndex((prev) => (prev + 1) % arcPoints.length);
    }, 45);

    return () => clearInterval(interval);
  }, [arcPoints]);

  if (!arcPoints || arcPoints.length === 0) return null;
  const currentPos = arcPoints[pointIndex];

  const dotIcon = L.divIcon({
    html: `<div className="traveling-light-dot"></div>`,
    className: 'traveling-dot-wrap',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  return <Marker position={currentPos} icon={dotIcon} interactive={false} />;
};

// ─── Main Component ──────────────────────────────────────────
const GlobalConnections = () => {
  const [selectedConnection, setSelectedConnection] = useState(GLOBAL_CONNECTIONS[0]); // Nairobi default
  const [mapCenter, setMapCenter] = useState([20.0, 15.0]);
  const [mapZoom, setMapZoom] = useState(2.8);
  const [userInteracted, setUserInteracted] = useState(false);

  // Primary Nairobi -> London Arc
  const nairobiCoords = GLOBAL_CONNECTIONS[0].coordinates;
  const londonCoords = GLOBAL_CONNECTIONS[1].coordinates;
  
  const nairobiLondonArc = useMemo(() => {
    return getCurvedArc(nairobiCoords, londonCoords, 60, 0.3);
  }, [nairobiCoords, londonCoords]);

  // Secondary Arcs from Nairobi to other global points
  const secondaryArcs = useMemo(() => {
    return GLOBAL_CONNECTIONS.slice(2).map(conn => ({
      id: conn.id,
      points: getCurvedArc(nairobiCoords, conn.coordinates, 40, 0.2)
    }));
  }, [nairobiCoords]);

  const handleSelectLocation = (conn) => {
    setSelectedConnection(conn);
    setMapCenter(conn.coordinates);
    setMapZoom(conn.type === 'hub' ? 4.5 : 4);
    setUserInteracted(true);
  };

  const handleRecenter = () => {
    setSelectedConnection(GLOBAL_CONNECTIONS[0]);
    setMapCenter([20.0, 15.0]);
    setMapZoom(2.8);
  };

  return (
    <div className="global-connections-section" aria-label="Global Connections and Networks">
      
      {/* Background Ambient Glows */}
      <div className="gc-ambient-glow-purple" />
      <div className="gc-ambient-glow-blue" />

      <div className="gc-container">
        
        {/* ─── Header & Left Panel Layout ─────────────────────── */}
        <div className="gc-layout">
          
          <div className="gc-info-panel">
            
            <div className="gc-eyebrow">
              <span className="gc-eyebrow-dot" />
              BEYOND BORDERS
            </div>

            <h2 className="gc-heading">
              Global <span className="gc-gradient-text">Connections</span>
            </h2>

            <p className="gc-subtext">
              Bridging Kenya to the world's leading educational networks, international examination boards, and global university pathways.
            </p>

            {/* Metric Pills */}
            <div className="gc-metrics-group">
              <div className="gc-metric-pill" onClick={() => handleSelectLocation(GLOBAL_CONNECTIONS[0])}>
                <div className="gc-metric-tag">[ 01 ]</div>
                <div className="gc-metric-info">
                  <span className="gc-metric-title">Nairobi, Kenya</span>
                  <span className="gc-metric-sub">MEC Global Hub</span>
                </div>
              </div>

              <div className="gc-metric-pill" onClick={() => handleSelectLocation(GLOBAL_CONNECTIONS[1])}>
                <div className="gc-metric-tag">[ 06+ ]</div>
                <div className="gc-metric-info">
                  <span className="gc-metric-title">Global Connections</span>
                  <span className="gc-metric-sub">Connecting learners worldwide</span>
                </div>
              </div>
            </div>

            {/* Active Location Info Card */}
            {selectedConnection && (
              <div className="gc-location-card">
                <div className="gc-card-top">
                  <span className={`gc-card-type-badge ${selectedConnection.type}`}>
                    {selectedConnection.tag}
                  </span>
                  <button 
                    className="gc-card-close-btn" 
                    onClick={() => setSelectedConnection(null)}
                    aria-label="Close location card"
                  >
                    <FaTimes />
                  </button>
                </div>

                <h3 className="gc-card-title">{selectedConnection.title}</h3>
                <div className="gc-card-city">{selectedConnection.subTitle}</div>
                <p className="gc-card-desc">{selectedConnection.description}</p>
                
                <div className="gc-card-footer">
                  <span className="gc-card-coords">
                    {selectedConnection.coordinates[0].toFixed(4)}° N, {selectedConnection.coordinates[1].toFixed(4)}° E
                  </span>
                  <button 
                    className="gc-card-focus-btn" 
                    onClick={() => handleSelectLocation(selectedConnection)}
                  >
                    Focus Location
                  </button>
                </div>
              </div>
            )}

            {/* Quick Network Selector Pills */}
            <div className="gc-selector-pills">
              <span className="gc-selector-label">Explore Locations:</span>
              <div className="gc-pills-wrap">
                {GLOBAL_CONNECTIONS.map(conn => (
                  <button
                    key={conn.id}
                    className={`gc-pill-item ${selectedConnection?.id === conn.id ? 'active' : ''}`}
                    onClick={() => handleSelectLocation(conn)}
                  >
                    {conn.city}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ─── Right / Main Interactive Map Container ─────────── */}
          <div className="gc-map-wrapper">
            
            {/* Instruction Overlay Pill */}
            {!userInteracted && (
              <div className="gc-map-hint-pill">
                <span>Drag to explore • Scroll to zoom • Select a location</span>
              </div>
            )}

            {/* Floating Custom Map Control Buttons */}
            <div className="gc-floating-controls">
              <button 
                className="gc-ctrl-btn" 
                onClick={() => setMapZoom(prev => Math.min(prev + 1, 8))}
                aria-label="Zoom in"
                title="Zoom in"
              >
                <FaPlus />
              </button>
              <button 
                className="gc-ctrl-btn" 
                onClick={() => setMapZoom(prev => Math.max(prev - 1, 2))}
                aria-label="Zoom out"
                title="Zoom out"
              >
                <FaMinus />
              </button>
              <button 
                className="gc-ctrl-btn" 
                onClick={handleRecenter}
                aria-label="Recenter map"
                title="Reset / Recenter Map"
              >
                <FaCompress />
              </button>
            </div>

            {/* Real Interactive Leaflet Map */}
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              scrollWheelZoom={false}
              className="gc-leaflet-container"
              zoomControl={false}
              attributionControl={true}
            >
              <MapController centerPoint={mapCenter} zoomLevel={mapZoom} />

              {/* CartoDB Dark Matter Tile Layer (Open-Access, Sleek Dark Theme, No API Key Required) */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                maxZoom={12}
                minZoom={2}
              />

              {/* Primary Nairobi -> London Curved Route */}
              <Polyline
                positions={nairobiLondonArc}
                pathOptions={{
                  color: '#A855F7',
                  weight: 3.5,
                  opacity: 0.85,
                  dashArray: '8, 8',
                  lineCap: 'round'
                }}
              />

              {/* Secondary Connection Curved Routes */}
              {secondaryArcs.map(arc => (
                <Polyline
                  key={arc.id}
                  positions={arc.points}
                  pathOptions={{
                    color: '#3B82F6',
                    weight: 1.8,
                    opacity: 0.45,
                    dashArray: '6, 6',
                    lineCap: 'round'
                  }}
                />
              ))}

              {/* Travelling Dot along Nairobi -> London Route */}
              <TravelingDot arcPoints={nairobiLondonArc} />

              {/* Connection Markers */}
              {GLOBAL_CONNECTIONS.map(conn => {
                const isSelected = selectedConnection?.id === conn.id;
                return (
                  <Marker
                    key={conn.id}
                    position={conn.coordinates}
                    icon={createCustomMarkerIcon(conn, isSelected)}
                    eventHandlers={{
                      click: () => handleSelectLocation(conn)
                    }}
                  >
                    <Popup className="gc-custom-popup" closeButton={false}>
                      <div className="gc-popup-content" onClick={() => handleSelectLocation(conn)}>
                        <div className="gc-popup-city">{conn.city}, {conn.country}</div>
                        <div className="gc-popup-title">{conn.title}</div>
                        <span className="gc-popup-badge">{conn.tag}</span>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

            </MapContainer>

            <div className="gc-map-footer">
              <span className="gc-footer-beacon" />
              <span>EXPLORE OUR GLOBAL REACH — NAIROBI TO THE WORLD</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default GlobalConnections;
