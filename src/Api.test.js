import fetchData from "./controllers/Api";
// Import de la fonction fetchData

describe('fetchData', () => {
    beforeEach(() => {
      global.fetch = jest.fn();
    });
  
    afterEach(() => {
      global.fetch.mockClear();
    });
  
    it('fetches job offer data correctly', async () => {
      // Mock de la fonction fetch pour simuler les données attendues de l'API
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ 
          resultats: [{
            "id": "167ZKWX",
            "intitule": "Ingénieur Devops  -  ARANUM24  (H/F)",
            "description": "La Direction des Services du groupe Econocom en PACA recrute des Ingénieurs DEVOPS H/F pour l'accompagner dans la transformation digitale de ses projets.\n\nVous rejoignez la Direction régionale AURA pilotée par un Directeur d'agence et une équipe de business managers, et comptant plus de 180 collaborateurs intégrés à l'ensemble de nos projets et prestations client.\n\nVous intégrez cette agence avec pour objectif de participer à des projets d'envergures autour des technologies Devops. Vous apporterez vos connaissances et votre savoir-faire technique auprès d'un ou plusieurs clients.\n\nLes missions seront les suivantes :\n\nConcevoir, développer et maintenir l'infrastructure et l'outillage des zones SI\n\nAutomatiser tout ce qui peut l'être : les déploiements, les tests, les mises à jour, la supervision, les sauvegardes\n\nAnalyser et résoudre des anomalies liées à la performance et à la scalabilité des systèmes\n\nDéfinir les actions pour améliorer l'existant et renforcer la proactivité pour maintenir la qualité de service\n\nAssurer la surveillance et la gestion des logs et des métriques des applications en utilisant des outils tels qu'Elasticsearch, Kibana, Grafana\n\nMaintenir la sécurité des systèmes en appliquant les meilleures pratiques de sécurité et en effectuant des audits réguliers\n\nDes missions complémentaires pourront être attribuées en fonction des environnements clients.\n\nProfil\nDiplômé d'une formation supérieure en informatique (Bac +2 à Bac+5), vous justifiez d'une première expérience réussie dans des environnements Devops. Idéalement, vous avez déjà une expérience significatives dans l'ingénierie système. \n\nFort d'une volonté d'apprendre et de progresser techniquement, vous êtes quelqu'un d'investi dans tout ce que vous entreprenez. Vous avez un bon sens de la communication, de la rigueur, vous savez gérer votre stress et savez gérer les priorités.\n\nVous êtes reconnu pour votre rigueur et possédez un excellent sens de l'organisation et de gestion des priorités. Vous avez la culture de l'engagement de résultat et la satisfaction client est au cœur de vos démarches.\n\nVos atouts sont les suivantes :\n\nTechnique : Expérience de travail avec les pipelines CI/CD; Maitrise des outils Kubernetes, DOCKER, GITLAB; Capacité à travailler dans un environnement Agile\n\nLinguistique : Anglais correct (oral et écrit) est un plus",
            "dateCreation": "2024-01-19T12:49:48.000Z",
            "dateActualisation": "2024-01-31T12:09:05.000Z",
            "lieuTravail": {
                "libelle": "69 - LYON 03",
                "latitude": 45.751578,
                "longitude": 4.869577,
                "codePostal": "69003",
                "commune": "69383"
            },
            "romeCode": "M1810",
            "romeLibelle": "Production et exploitation de systèmes d'information",
            "appellationlibelle": "Ingénieur / Ingénieure d'exploitation informatique",
            "entreprise": {
                "nom": "ARA (69) - ECONOCOM FRANCE",
                "description": "Rejoignez les équipes du Groupe Econocom et intégrez la 7ème ESN en France !\n\nPremière Entreprise Générale du Digital en Europe (EGD), le groupe Econocom conçoit, finance et facilite la transformation digitale des entreprises et des organisations publiques.\n\nRejoindre Econocom, c'est rejoindre un groupe international de 8 200 collaborateurs, avec un CA de 2,5 milliards d'euros, qui couvre l'ensemble de la chaîne des métiers du numérique : des équipements, aux services et jusqu'au financement.",
                "url": "https://www.econocom.com/fr",
                "entrepriseAdaptee": false
            },
            "typeContrat": "CDI",
            "typeContratLibelle": "Contrat à durée indéterminée",
            "natureContrat": "Contrat travail",
            "experienceExige": "E",
            "experienceLibelle": "1 an - en environnements Devops",
            "experienceCommentaire": "en environnements Devops",
            "formations": [
                {
                    "niveauLibelle": "Bac+5 et plus ou équivalents",
                    "exigence": "S"
                },
                {
                    "niveauLibelle": "Bac+2 ou équivalents",
                    "exigence": "E"
                }
            ],
            "langues": [
                {
                    "libelle": "Anglais",
                    "exigence": "S"
                }
            ],
            "competences": [
                {
                    "code": "109971",
                    "libelle": "Diagnostiquer la nature et l'origine des incidents et mettre en oeuvre les mesures correctives",
                    "exigence": "S"
                },
                {
                    "code": "109979",
                    "libelle": "Surveiller le fonctionnement d'applicatifs et logiciels",
                    "exigence": "S"
                },
                {
                    "code": "109982",
                    "libelle": "Surveiller le fonctionnement d'espaces disques",
                    "exigence": "S"
                },
                {
                    "code": "109983",
                    "libelle": "Surveiller le fonctionnement de réseaux informatiques et télécom",
                    "exigence": "S"
                },
                {
                    "code": "109986",
                    "libelle": "Surveiller le fonctionnement de systèmes",
                    "exigence": "S"
                },
                {
                    "code": "113309",
                    "libelle": "Superviser et organiser les travaux d'exploitation/production informatique",
                    "exigence": "S"
                },
                {
                    "code": "300587",
                    "libelle": "Concevoir et maintenir un système de cybersécurité",
                    "exigence": "S"
                }
            ],
            "salaire": {
                "commentaire": "selon compétences",
                "complement1": "Autre"
            },
            "dureeTravailLibelle": "37H Travail en journée",
            "dureeTravailLibelleConverti": "Temps plein",
            "alternance": false,
            "contact": {
                "nom": "ARA (69) - ECONOCOM FRANCE  - Mme Laurie ROUTIN",
                "coordonnees1": "Veuillez-vous connecter à la plateforme de Salons en ligne de recrutement de Pôle emploi :",
                "coordonnees2": "https://salonenligne.pole-emploi.fr/candidat/?salonId=2611&standId=36220&offreId=167ZKWX"
            },
            "nombrePostes": 1,
            "accessibleTH": false,
            "qualificationCode": "8",
            "qualificationLibelle": "Agent de maîtrise",
            "codeNAF": "77.33Z",
            "secteurActivite": "77",
            "secteurActiviteLibelle": "Location et location-bail de machines de bureau et de matériel informatique",
            "qualitesProfessionnelles": [
                {
                    "libelle": "Avoir le sens du service",
                    "description": "Capacité à identifier (voire anticiper) les besoins des usagers, clients (internes et externes) et à apporter une réponse adaptée afin de les satisfaire."
                },
                {
                    "libelle": "Organiser son travail selon les priorités et les objectifs",
                    "description": "Capacité à planifier, prioriser, anticiper des actions, en tenant compte des moyens, des ressources, des objectifs et du calendrier pour les réaliser."
                },
                {
                    "libelle": "Faire preuve de rigueur et de précision",
                    "description": "Capacité à réaliser des tâches en suivant avec exactitude les règles, les procédures, les instructions qui ont été fournies, sans réaliser d'erreur et à transmettre clairement des informations. Se montrer ponctuel et respectueux des règles de savoir-vivre usuelles."
                }
            ],
            "origineOffre": {
                "origine": "1",
                "urlOrigine": "https://candidat.pole-emploi.fr/offres/recherche/detail/167ZKWX"
            },
            "offresManqueCandidats": false
        }]
        })
      });
  
      const data = await fetchData();
  
      expect(data.intitule).toBe('Ingénieur Devops  -  ARANUM24  (H/F)');
      expect(data.experienceLibelle).toBe("1 an - en environnements Devops");
      expect(data.dateCreation).toBe('2024-01-19');
      expect(data.departement).toBe('69');
      expect(data.experienceExige).toBe('E');
    });
  });
