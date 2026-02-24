// src/components/Hero.js
import React from "react";
import "./Hero.css"; // tu peux créer un fichier Hero.css pour le style

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Bienvenue sur Greenova</h1>
        <p>Votre plateforme pour l'agriculture numérique et les produits locaux</p>
        <a href="/products" className="hero-button">
          Découvrir nos produits
        </a>
      </div>
    </div>
  );
};

export default Hero;