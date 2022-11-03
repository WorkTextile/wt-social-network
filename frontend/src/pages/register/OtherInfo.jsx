import React from "react";

const OtherInfo = ({ formData }) => {
  return (
    <div className="other-info-container">
      <select 
        name="currentJob"
        onChange={formData}
        >
        <option>Votre métier ?</option>
        <option value="photographe">Photographe</option>
        <option value="Illustrateur">Illustrateur</option>
        <option value="Couturier">Couturier</option>
        <option value="Styliste">Styliste</option>
        <option value="Graphiste">Couturier</option>
        <option value="Développement">Développement</option>
        <option value="Commercial">Commercial</option>
        <option value="Distributeur">Distributeur</option>
        <option value="Modéliste">Modéliste</option>
        <option value="Chef de Projet">Chef de Projet</option>
        <option value="Mannequin">Mannequin</option>
        <option value="Relation Presse">Relation Presse</option>
        <option value="Journaliste">Journaliste</option>
        <option value="C.M">C.M</option>
        <option value="Influencer">Influencer</option>
        <option value="Artiste">Artiste</option>
        <option value="Stagiaire">Stagiaire</option>
        <option value="Marketing">Marketing</option>
        <option value="Broderie">Broderie</option>
      </select>

      <select 
        name="experience"
        onChange={formData}
        >
        <option>Votre experience ?</option>
        <option value="0 à 2 ans">0 à 2 ans</option>
        <option value="2 à 5 ans">2 à 5 ans</option>
        <option value="5 ans et +">5 ans et +</option>
      </select>
    
       <input
        type="text"
        placeholder="Ville (Exemple Paris)"
        name="city"
        onChange={formData}
      />
       <input
        type="number"
        placeholder="Prix en Euros par jour"
        name="charges"
        onChange={formData}
      />
    </div>
  );
}

export default OtherInfo;