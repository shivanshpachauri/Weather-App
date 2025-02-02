import React, { useContext, useEffect, useState } from "react";
import "./Weatherdashboard.css"; // Import the CSS file

import { currentposition, Weatherdata } from "./http"; // Import the WeatherContext
import { useQuery } from "@tanstack/react-query";
export default function CustomdDashboard({weatherdata,setweatherdata,setlocation,location}){

  const { data: positionData } = useQuery({
    queryKey: ['fetchposition'],
    queryFn: currentposition,
  });

  useEffect(() => {
    if (positionData) {
      setlocation(positionData);
    }
  }, [positionData]);

  const { data: fetchweather } = useQuery({
    queryKey: ['fetchweatherdata',location],
    queryFn: ()=>Weatherdata(location),
    enabled:!!location
  });

  React.useEffect(() => {
    if (fetchweather) {
      setweatherdata(fetchweather)
    }
  }, [fetchweather]);

  if (weatherdata) {
    console.table(weatherdata);
  }

  return (
    <center>
    <table className="table text-center text-capitalise centered-table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Weather</th>
          <th scope="col">Temperature</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {weatherdata && (
          <tr>
            <th scope="row">{weatherdata[10]}</th>
            <td>
              <p>
                <strong className="d-block">{weatherdata[1][1][0].main}</strong>
                {weatherdata[1][1][0].description}
              </p>
            </td>
            <td>
            <ul className="list-unstyled">
              <li> Temperature: {weatherdata[3][1].temp}</li>
              <li> Feels like: {weatherdata[3][1].feels_like}</li>
              <li>  Temperature min: {weatherdata[3][1].temp_min}</li>
              <li>           
              Temperature max{weatherdata[3][1].temp_max}</li>
            </ul>  
            </td>
            <td>
              <strong>{weatherdata[11][1]}</strong>
            </td>
          </tr>
        )}
      </tbody>
    </table>
    </center>
  );
}
