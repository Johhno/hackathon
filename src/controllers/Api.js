const TOKEN = "3NjRyOobGRtOAIL68fPt66xLvmw";
let metaDatas = {
  intitule: "",
  experienceLibelle: "",
  dateCreation: "",
  departement: "",
  experienceExige: "",
};

async function callAPI(
  url,
  libelleROME,
  codeCR,
  departement,
  codeDepartement,
  method,
  headers
) {
  try {
    const apiUrl =
      url + "?" + libelleROME + codeCR + "&" + departement + codeDepartement;
    const response = await fetch(apiUrl, {
      method: method,
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (!data) {
      throw new Error("Bad response");
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export default async function fetchData() {
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

  try {
    const data = await callAPI(
      url,
      libelleROME,
      codeROME,
      departement,
      codeDepartement,
      method,
      headers
    );

    // Log the content returned from the API for debugging
    console.log("API Response:", data);

    if (!data || !data.resultats || data.resultats.length === 0) {
      throw new Error("No valid data returned from API");
    }

    // Get a random job offer
    const nb = data.resultats.length;
    const offre = data.resultats[parseInt(Math.random() * nb)];
    const dateCreationOffre = new Date(offre.dateCreation);

    // Fill meta data for the job offer
    metaDatas.intitule = offre.intitule;
    metaDatas.experienceLibelle = offre.experienceLibelle;
    metaDatas.dateCreation = dateCreationOffre.toISOString().split('T')[0];
    metaDatas.departement = offre.lieuTravail.codePostal.substring(0, 2);
    metaDatas.experienceExige = offre.experienceExige;

    return metaDatas;
  } catch (error) {
    console.error("Error fetching job offer data:", error.message);
    throw error;
  }
}


