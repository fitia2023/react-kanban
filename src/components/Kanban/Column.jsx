import React from "react";
import Card from "./Card";

export default function Column(props) {
  // Mapping des statuts vers des classes Tailwind pour fond et texte
  const statusStyleMap = {
    "A Faire": { bg: "bg-red-200", text: "text-red-700" },
    "En cours": { bg: "bg-yellow-200", text: "text-yellow-500" },
    Terminé: { bg: "bg-green-200", text: "text-green-700" },
  };

  const style = statusStyleMap[props.title] || {
    bg: "bg-gray-200",
    text: "text-gray-800",
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className={`text-lg ${style.text} font-bold mb-2`}>{props.title}</h2>
      {props.kanbans.map((item, index) => (
        <Card key={index} item={item} style={style} />
      ))}
    </div>
  );
}
