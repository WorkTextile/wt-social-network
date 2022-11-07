import { useState, useEffect } from "react";
import "./profilePage.scss"

const ProfilePage = ({ goToBack, goToNext, onboardingData, setOnboardingData, setFiles,files }) => {

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (files) {
      setImageUrl(URL.createObjectURL(files));
    }
  }, [files]);

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Informations sur votre : Profil</h1>
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
            name="lastName"
            placeholder="Nom"
            value={onboardingData.lastName}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, lastName: event.target.value })}

          />

          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={onboardingData.firstName}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, firstName: event.target.value })}

          />
           <input
            type="number"
            placeholder="Telephone"
            name="telephone"
            value={onboardingData.telephone}
            onChange={(event) =>
              setOnboardingData({ ...onboardingData, telephone: event.target.value })}
           

          />  
          <br />
          <button onClick={ () => goToNext()}>Continuer</button>
          <button onClick={ () => goToBack()}>Retour</button>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage;
