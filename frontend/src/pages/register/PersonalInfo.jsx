import React from "react";

const PersonalInfo = ({ formData }) => {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Nom..."
        name="firstName"
        onChange={formData}
      />
      <input
        type="text"
        placeholder="Prénom..."
        name="lastName"
        onChange={formData}
      />
      <input
        type="number"
        placeholder="Votre numéro de Telephone..."
        name="telephone"
        onChange={formData}
      />
      <input 
        type="file"
        id="avatar" 
        accept="image/png, image/jpeg" 
        onChange={formData} />
        <p>**File Accepted : .jpeg, .jpg, gif et .png</p>
    </div>
  );
}

export default PersonalInfo;