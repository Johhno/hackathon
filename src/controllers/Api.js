const TOKEN = "cqO-NaaYsgh_zSV-1Je3kG1cDu4";
let metaDatas = {
  intitule: "",
  experienceLibelle: "",
  dateCreation: "",
  departement: "",
  experienceExige: "",
};

function fetchData() {
  const url =
    "https://api.pole-emploi.io/partenaire/offresdemploi/v2/offres/search";
  const method = "GET";
  const libelleROME = "codeROME=";
  const departement = "departement=";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + TOKEN,
  };

  let codeDepartement = "69";
  let codeROME = "M1810";

  callAPI(
    url,
    libelleROME,
    codeROME,
    departement,
    codeDepartement,
    method,
    headers
  )
    .then((data) => {
      // le nombre d'offres total recupérer sur 
      let nb = data.resultats.length;
      // offre d'emploi aleatoire
      let offre = data.resultats[parseInt(Math.random() * (nb * 1) + 1)];
      let dateCreationOffre = new Date();
      dateCreationOffre = offre.dateCreation;

      // remplissage des meta datas qui vont servir a la creation du monstre et pour l'affichages des informations de l'offre d'emploi
      metaDatas.intitule = offre.intitule;
      metaDatas.experienceLibelle = offre.experienceLibelle;
      metaDatas.dateCreation = dateCreationOffre.substring(0, 10);
      metaDatas.departement = offre.lieuTravail.codePostal.substring(0, 2);
      metaDatas.experienceExige = offre.experienceExige;
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
}
/////////////////////////////////////////////////////////////
async function callAPI(
  url,
  libelleROME,
  codeCR,
  departement,
  codeDepartement,
  method,
  headers,
  body
) {
  try {
    const apiUrl =
      url + "?" + libelleROME + codeCR + "&" + departement + codeDepartement;
    const response = await fetch(apiUrl, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });
    if (!response.ok && response.status === 401) {
      console.log(response);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
