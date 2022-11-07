import React, {useState, useEffect}  from 'react'
import "./accountType.scss";

const AccountTypePage = ({ goToBack, goToNext, onboardingData, setOnboardingData }) => {
  const [errorMessage, setErrorMessage] = useState("");
 
  useEffect(() => {

    if (!onboardingData) {
      setErrorMessage("Please select your account type and structure")
    } else {
      setErrorMessage("");
    }
  }, [onboardingData])

  return (

    <div className='account-page-container'>
      <div className='content-container'>
      <h1>Type de compte</h1>
        <p>Indiquez votre type de compte utilisateur</p>
      <hr />
      {errorMessage && <div className='fail'>{errorMessage}</div>}
      <select
        name="accountType"   
        value={onboardingData.accountType}  
        onChange={(event) =>
          setOnboardingData({ ...onboardingData, accountType: event.target.value })}
        
      >
        <option >Quel est votre type de compte</option>
        <option value="Client">Client</option>
        <option value="Usine">Usine</option>
        <option value="Freelance">Freelance</option>
        <option value="Particulier">Particulier</option>
      </select>

      {onboardingData.accountType === "Client" && 
      <select 
        name="clientStructure" 
        value={onboardingData.clientStructure}  
        onChange={(event) =>
          setOnboardingData({ ...onboardingData, clientStructure: event.target.value })}
       
      >
        <option >Quel est votre type de structure ?</option>
        <option value="Marque">Marque</option>
        <option value="Entreprise">Entreprise</option>
        <option value="Association">Association</option>
        <option value="Collectivite">Collectivite</option>
      </select>
      }

      {onboardingData.accountType === "Usine" &&
      <select 
        name="usineStructure" 
        value={onboardingData.usineStructure}  
        onChange={(event) =>
          setOnboardingData({ ...onboardingData, usineStructure: event.target.value })}
        
      >
        <option >Quel est votre type de structure ?</option>
        <option value="Usine de Confection">Usine de Confection</option>
        <option value="Usine de Matiere">Usine de Matiere</option>
        <option value="Usine de Filature">Usine de Filature</option>
        <option value="Usine de Decoupe">Usine de Decoupe</option>
        <option value="Usine de d'accessoires">Usine de d'accessoires</option>
        <option value="Usine de Decoupe">Atelier Serigraphie et Broderie</option>
      </select>
      }

      <br />
      <br />
      <button
        disabled = {
          !onboardingData
        }  
        onClick={ () => goToNext()}>
        Continuer
      </button>
      <button 
        onClick={ () => goToBack()}>
        Retour
      </button>
      </div>
    </div>
  )
}

export default AccountTypePage;
