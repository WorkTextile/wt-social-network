import React from 'react'
import "./successPage.scss";

const SuccessPage = ({ onboardingComplete, currentIndex }) => {
  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
        <h1 className='felicitation'>Félicitations !!</h1>
        <p>Votre compte à été créé avec succès.</p>
        <p>Vous pouvez maintenant naviguer librement sur notre plateforme et utiliser tous les services à votre disposition.  </p>
      </div>
      <div className="footer-like">
      <p>Finalisez votre inscription PRO </p>
      <p>Vous pouvez renseigner le reste des informations de votre profil et de votre entreprise à tous moments, cela peut vous aider à trouver de nouveaux contacts plus rapidement et à être plus visible sur notre plateforme. Description, collaborateurs, galerie d'images, réseau sociaux, ...</p>
      </div>
      </div>
      <br />
      <button className="btn" onClick={ () => onboardingComplete()}>Finaliser mon inscription</button>
    </div>
  )
}

export default SuccessPage;
