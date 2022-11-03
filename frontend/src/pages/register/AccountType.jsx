import React from "react";

const AccountType = ({formData, value}) => {

  return (
    <>
        <select  value={value.accountType} name = "accountType" onChange={formData}>
            <option>Quel est votre type de compte</option>
            <option value="Client">Client</option>
            <option value="Usine">Usine</option>
            <option value="Freelance">Freelance</option>
            <option value="Particulier">Particulier</option>
        </select>

        {value.accountType === "Client" && 
        <select name="clientStructure" onChange={formData}>
            <option>Quel est votre type de structure ?</option>
            <option value="Marque">Marque</option>
            <option value="Entreprise">Entreprise</option>
            <option value="Association">Association</option>
            <option value="Collectivite">Collectivite</option>
        </select>
        }

        {value.accountType === "Usine" &&
        <select name="industryStructure" onChange={formData}>
            <option>Quel est votre type de structure ?</option>
            <option value="Usine de Confection">Usine de Confection</option>
            <option value="Usine de Matiere">Usine de Matiere</option>
            <option value="Usine de Filature">Usine de Filature</option>
            <option value="Usine de Decoupe">Usine de Decoupe</option>
            <option value="Usine de d'accessoires">Usine de d'accessoires</option>
            <option value="Usine de Decoupe">Atelier Serigraphie et Broderie</option>
        </select>
        }
    </>
  );
}

export default AccountType;