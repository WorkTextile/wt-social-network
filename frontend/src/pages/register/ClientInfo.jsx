import { useState, useEffect } from "react";
import "./clientInfo.scss"

const ClientInfo = ({ goToBack, goToNext, onboardingData, setOnboardingData, setFiles,files }) => {

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (files) {
      setImageUrl(URL.createObjectURL(files));
    }
  }, [files]);

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Informations sur votre : {onboardingData.clientStructure}</h1>
        <hr />
        <img src={imageUrl}  
          style= {{
            height: "120px",
            width: "120px",
            border: "1px solid #BD1BEE",        
          }}
        />
        <form>
          <input
            accept="image/png, image/jpeg, image/jpg"
            type="file"
            id="select-image"
            onChange={(e) => setFiles(e.target.files[0])}
          />
          <input
            type="text"
            name="brand"
            placeholder="Votre marque"
            value={onboardingData.clientBrand}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, clientBrand: event.target.value })}

          />

          <input
            type="text"
            name="clientJobPosition"
            placeholder="Poste (Exemple: Gérant)"
            value={onboardingData.clientJobPosition}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, clientJobPosition: event.target.value })}

          />
           <input
            type="text"
            placeholder="Ville (Exemple: Paris)"
            name="clientCity"
            value={onboardingData.clientCity}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, clientCity: event.target.value })}
           

          />  
          <br />
          <button onClick={ () => goToNext()}>Continuer</button>
          <button onClick={ () => goToBack()}>Retour</button>
        </form>
      </div>
    </div>
  )
}

export default ClientInfo;
