import React from 'react'

const SkillPage = ({ goToBack, goToNext, onboardingData, setOnboardingData }) => {

  return (
    <div className='page-container'>
      <form className='content-container'>
        <h1>Informations sur votre : Savoir-faire</h1>
        <p>Visibles sur votre page professionnel</p>
        <hr />
        <select 
          name="currentJob" 
          value={onboardingData.currentJob}  
          onChange={(event) =>
            setOnboardingData({ ...onboardingData, currentJob: event.target.value })}
          required={true}
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
          value={onboardingData.experience}  
          onChange={(event) =>
            setOnboardingData({ ...onboardingData, experience: event.target.value })}
          
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
          value={onboardingData.city}  
          onChange={(event) =>
            setOnboardingData({ ...onboardingData, city: event.target.value })}
          
        />

       <input
          type="number"
          placeholder="Prix en Euros par jour"
          name="charges"
          value={onboardingData.charges}  
          onChange={(event) =>
            setOnboardingData({ ...onboardingData, charges: event.target.value })}
        
        />
        <br />
        <br />
        <button onClick={ () => goToNext()}>Continuer</button>
        <button onClick={ () => goToBack()}>Retour</button>
      </form>
    </div>
  )
}

export default SkillPage;
