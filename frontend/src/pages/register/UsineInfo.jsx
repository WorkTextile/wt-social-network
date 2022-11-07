import { useState, useEffect } from "react";
import "./usineInfo.scss"

const UsineInfo = ({ goToBack, goToNext, onboardingData, setOnboardingData, setFiles,files }) => {

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (files) {
      setImageUrl(URL.createObjectURL(files));
    }
  }, [files]);

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Informations sur votre : {onboardingData.usineStructure}</h1>
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
            name="usineName"
            placeholder="Nom de votre usine"
            value={onboardingData.usineName}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, usineName: event.target.value })}

          />

          <input
            type="text"
            name="usineJobPosition"
            placeholder="Poste (Exemple: Gérant)"
            value={onboardingData.usineJobPosition}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, usineJobPosition: event.target.value })}

          />
           <input
            type="text"
            placeholder="Ville (Exemple: Paris)"
            name="usineCity"
            value={onboardingData.usineCity}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, usineCity: event.target.value })}
           

          />  
          <br />
          <button onClick={ () => goToNext()}>Continuer</button>
          <button onClick={ () => goToBack()}>Retour</button>
        </form>
      </div>
    </div>
  )
}

export default UsineInfo;
