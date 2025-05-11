export const KanbanStatus = {
  TODO: "A Faire",
  IN_PROGRESS: "En cours",
  DONE: "Terminé",
};

export default class KanbanModel {
  id;

  tache;

  auteur;

  attribution;

  dateCreation;

  dateEcheance;

  KanbanStatus;

  constructor(
    id,
    tache,
    auteur,
    attribution,
    dateCreation,
    dateEcheance,
    KanbanStatus
  ) {
    this.id = id;
    this.tache = tache;
    this.auteur = auteur;
    this.attribution = attribution;
    this.dateCreation = dateCreation;
    this.dateEcheance = dateEcheance;
    this.KanbanStatus = KanbanStatus;
  }

  getId() {
    return this.id;
  }

  getNom() {
    return this.tache;
  }

  getAuteur() {
    return this.auteur;
  }

  getAttribution() {
    return this.attribution;
  }

  getDateCreation() {
    return this.dateCreation;
  }

  getDateEcheance() {
    return this.dateEcheance;
  }

  getKanbanStatus() {
    return this.KanbanStatus;
  }

  setId(id) {
    this.id = id;
  }

  setNom(tache) {
    this.tache = tache;
  }

  setAuteur(auteur) {
    this.auteur = auteur;
  }

  setAttribution(attribution) {
    this.attribution = attribution;
  }

  setDateCreation(dateCreation) {
    this.dateCreation = dateCreation;
  }

  setDateEcheance(dateEcheance) {
    this.dateEcheance = dateEcheance;
  }

  setKanbanStatus(KanbanStatus) {
    this.KanbanStatus = KanbanStatus;
  }
}
