import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :D</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.5505, -46.6333]}
        zoom={12}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-23.5505, -46.6333]}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
