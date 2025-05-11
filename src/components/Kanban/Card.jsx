import React from "react";

export default function Card({ item, index, style }) {
  return (
    <div
      key={index}
      className={`w-full relative p-4 mb-4 rounded-md ${style.bg} shadow transition-shadow duration-300 hover:shadow-lg`}
    >
      <p className="font-bold text-lg">{item.tache}</p>
      <p className="text-sm text-gray-700">Auteur : {item.auteur}</p>
      <p className="text-sm text-gray-700">Attribué à : {item.attribution}</p>
      <p className="text-sm text-gray-600">Créé le : {item.dateCreation}</p>
      <p className="text-sm text-gray-600">Échéance : {item.dateEcheance}</p>
      <p className={`text-sm font-medium ${style.text}`}>
        Statut : {item.KanbanStatus}
      </p>
    </div>
  );
}
