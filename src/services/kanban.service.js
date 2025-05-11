export default class KanbanService {
  constructor() {
    this.kanbans = [
      {
        id: 1,
        tache: "Tâche 1",
        auteur: "Auteur 1",
        attribution: "Attribution 1",
        dateCreation: "2023-10-01",
        dateEcheance: "2023-10-05",
        KanbanStatus: "A Faire",
      },
      {
        id: 2,
        tache: "Tâche 2",
        auteur: "Auteur 2",
        attribution: "Attribution 2",
        dateCreation: "2023-10-02",
        dateEcheance: "2023-10-06",
        KanbanStatus: "En cours",
      },
      {
        id: 3,
        tache: "Tâche 3",
        auteur: "Auteur 3",
        attribution: "Attribution 3",
        dateCreation: "2023-10-03",
        dateEcheance: "2023-10-07",
        KanbanStatus: "Terminé",
      },
      {
        id: 4,
        tache: "Tâche 4",
        auteur: "Auteur 4",
        attribution: "Attribution 4",
        dateCreation: "2023-10-04",
        dateEcheance: "2023-10-08",
        KanbanStatus: "A Faire",
      },
      {
        id: 5,
        tache: "Tâche 5",
        auteur: "Auteur 5",
        attribution: "Attribution 5",
        dateCreation: "2023-10-05",
        dateEcheance: "2023-10-09",
        KanbanStatus: "En cours",
      },
      {
        id: 6,
        tache: "Tâche 6",
        auteur: "Auteur 6",
        attribution: "Attribution 6",
        dateCreation: "2023-10-06",
        dateEcheance: "2023-10-10",
        KanbanStatus: "Terminé",
      },
      {
        id: 7,
        tache: "Tâche 7",
        auteur: "Auteur 7",
        attribution: "Attribution 7",
        dateCreation: "2023-10-07",
        dateEcheance: "2023-10-11",
        KanbanStatus: "A Faire",
      },
      {
        id: 8,
        tache: "Tâche 8",
        auteur: "Auteur 8",
        attribution: "Attribution 8",
        dateCreation: "2023-10-08",
        dateEcheance: "2023-10-12",
        KanbanStatus: "En cours",
      },
      {
        id: 9,
        tache: "Tâche 9",
        auteur: "Auteur 9",
        attribution: "Attribution 9",
        dateCreation: "2023-10-09",
        dateEcheance: "2023-10-13",
        KanbanStatus: "Terminé",
      },
      {
        id: 10,
        tache: "Tâche 10",
        auteur: "Auteur 10",
        attribution: "Attribution 10",
        dateCreation: "2023-10-10",
        dateEcheance: "2023-10-14",
        KanbanStatus: "A Faire",
      },
    ];
  }
  getKanbans() {
    return this.kanbans;
  }
  getKanbanById(id) {
    return this.kanbans.find((kanban) => kanban.id === id);
  }
  addKanban(kanban) {
    this.kanbans.push(kanban);
  }
  updateKanban(id, updatedKanban) {
    const index = this.kanbans.findIndex((kanban) => kanban.id === id);
    if (index !== -1) {
      this.kanbans[index] = { ...this.kanbans[index], ...updatedKanban };
    }
  }
  deleteKanban(id) {
    this.kanbans = this.kanbans.filter((kanban) => kanban.id !== id);
  }
  getKanbanByStatus(status) {
    return this.kanbans.filter((kanban) => kanban.KanbanStatus === status);
  }
  getKanbanByDate(date) {
    return this.kanbans.filter((kanban) => kanban.dateEcheance === date);
  }
  getKanbanByAuthor(author) {
    return this.kanbans.filter((kanban) => kanban.auteur === author);
  }
  getKanbanByAssignee(assignee) {
    return this.kanbans.filter((kanban) => kanban.attribution === assignee);
  }
  getKanbanByTask(task) {
    return this.kanbans.filter((kanban) => kanban.tache === task);
  }
  getKanbanByCreationDate(date) {
    return this.kanbans.filter((kanban) => kanban.dateCreation === date);
  }
  getKanbanByDueDate(date) {
    return this.kanbans.filter((kanban) => kanban.dateEcheance === date);
  }
}
