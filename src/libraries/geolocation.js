import {useState} from "react";

const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export const useGeolocation = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const successLocating = position => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }

  const errorLocating = () => {
    setStatus('Unable to retrieve your location');
  }

  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(successLocating, errorLocating, geoOptions);
  }

  return [lat, lng, status];
}
