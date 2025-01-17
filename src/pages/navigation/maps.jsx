import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React, { useState, useEffect } from 'react'

function maps () {
  const [position, setPosition] = useState(null)
  const defaultPosition = [51.505, -0.09]

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          setPosition([latitude, longitude])
        },
        error => {
          console.error('Error getting location:', error)
        }
      )
    } else {
      setPosition(defaultPosition)
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  if (!position) {
    return <div>Loading map...</div>
  }
  return (
      <MapContainer
        center={position}
        zoom={2}
        className='dark:bg-black z-0 rounded-md w-full h-[calc(100vh-90px)]'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  )
}

export default maps
