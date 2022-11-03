import React from "react";

const SignUpInfo = ({formData}) => {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Votre adresse email"
        name="email"
        onChange={formData}
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        name="password"
        onChange={formData}
      />
      <input
        type="password"
        placeholder="Confirmez"
        name="confirmPassword"
        onChange={formData}
      />
    </div>
  );
}

export default SignUpInfo;