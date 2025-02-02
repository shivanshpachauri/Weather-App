import React from "react";
import headerimage from "./headerimage.jpg"
export default function Customheader() {
  return (
    <header>
      <img src={headerimage} alt="headerimage"  className="rounded"/>
      
      <h1 className="text-capitalise">Weather dashboard</h1>
    </header>
  );
}
