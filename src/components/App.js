import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    { name: "AI Assistant", description: "An assistant that helps with coding and daily tasks." },
    { name: "Smart Home App", description: "Controls smart home devices through a single interface." },
    { name: "EcoTracker", description: "Tracks carbon footprint and suggests green alternatives." }
  ];
  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project,index)=>(
          <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
        ))}
      </div>
    </div>
  )
}


export default App;
