import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useLocation} from 'react-router-dom';

import { Container } from "react-bootstrap";

const containerStyle = {
    width: '90rem',
    height: '50rem'
  };
  
  // const center = {
  //   lat: 18.52043,
  //    lng: 73.856743 
  // };

export function Location(){
    

  const [location, setLocation] =useState(null);
  const [isLoading, setIsLoading] =useState(false);
  const [center, setCenter] = useState(null);
  const [locationPresent, setLocationPresent] = useState(false);
  const state1 = useLocation();

  // console.log("state is", state);
  if(state1!=null){
  console.log("jwt ", state1);
  }

  useEffect(()=>{
    async function fetchLoc(){
      try{
          setIsLoading(true);
        const result = await fetch('http://127.0.0.1:3900/get/location',
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "Authorization": state1?.state?.jwt
          }
        });
        const data = await result.json();
        setLocation(await data);
        if(data?.location?.length > 0){
          setLocationPresent(true);
          setCenter({
            lat: parseFloat(data.location[0].lat),
             lng: parseFloat(data.location[0].long)
          })
        }
        if(data?.location?.length === 0){
          setLocationPresent(false);
        }
        console.log("location present", locationPresent);
        // setLat(await data.location[0].lat);
        // setLng(await data.location[0].long);
       

        console.log(center);
        // console.log(lat);
        // console.log(lng);
        setIsLoading(false);
        
      }catch(error){
        console.log(error);
      }
    }
    fetchLoc();
  },[]);

  useEffect(()=>{
    async function fetchLoc(){
      try{
        setInterval(async()=>{
          setIsLoading(true);
        const result = await fetch('http://127.0.0.1:3900/get/location',
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "Authorization": state1?.state?.jwt
          }
        });
        const data = await result.json();
        setLocation(await data);
        if(data?.location?.length > 0){
          setLocationPresent(true);
          setCenter({
            lat: parseFloat(data.location[0].lat),
             lng: parseFloat(data.location[0].long)
          })
        }
        if(data?.location?.length === 0){
          setLocationPresent(false);
        }
        console.log("location present", locationPresent);
        // setLat(await data.location[0].lat);
        // setLng(await data.location[0].long);
       

        console.log(center);
        // console.log(lat);
        // console.log(lng);
        setIsLoading(false);
        },10000)
      }catch(error){
        console.log(error);
      }
    }
    fetchLoc();
  },[]);

//  if(!isLoading){
//   console.log(location.location[0]._id);
//  }

// This works
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDPJpebgHuw1uvoQFNVLBaE6lw6ahuQ2SY"
      })
    
      const [map, setMap] = React.useState(null)
      
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      if(!locationPresent){
        return <div>Location has not been updated by user</div>
      }
    
      return isLoaded && !isLoading ? (
          <Container className='mt-4'>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            // onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center} />
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
          </Container>
      ) : <></>
}

