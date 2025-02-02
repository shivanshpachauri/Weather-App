import axios from "axios";

// import React from "react";
// impoty axios
export async function Weatherdata({latitude,longitude}) {
  const apikey = "e21df8f6af55845dabadf2f3a91ec1d0";
  console.log(latitude+" "+longitude);
  
  // latitude=44.34
  // longitude=10.99
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
  );
  
  
  // if(!response.ok){
  //   throw Error("Error in Fetching Weather")
  // }
  const dataArray = Object.entries(response.data);
  console.log(dataArray);
  if(!dataArray){
    throw Error("Error in fetching weather")
  }
  return dataArray;
}

export async function currentposition() {
  let latitude;
  let longitude;
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          const data = {
            latitude,
            longitude,
          };
          resolve(data);
        },
        (error) => {
          reject("Error getting position: " + error.message);
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}
