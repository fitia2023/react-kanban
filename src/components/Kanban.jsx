import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Column from "./Kanban/Column";
import KanbanService from "../services/kanban.service.js";
import { KanbanStatus } from "@/models/kanban.model.js";
import useClickOut from "../hooks/useClickOut";
import Form from "./Kanban/Form.jsx";

export default function Kanban() {
  const kanbanService = new KanbanService();
  const [dataKanban, setDataKanban] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const refModal = useRef(null);

  const formkaban = (newKanban) => {
    kanbanService.addKanban(newKanban);
    setIsOpenModal(false);
    const kanbans = kanbanService.getKanbans();
    setDataKanban(kanbans);
  };

  useEffect(() => { 
    const kanbans = kanbanService.getKanbans();

    setDataKanban(kanbans);
  }, []);

  useClickOut(refModal, () => {
    if (isOpenModal) {
      setIsOpenModal(false);
    }
  });

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="rounded bg-white shadow-lg p-4">
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            Ajouter
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dataKanban &&
            Object.values(KanbanStatus).map((status) => (
              <Column
                key={status}
                title={status}
                kanbans={dataKanban.filter(
                  (kanban) => kanban.KanbanStatus === status
                )}
              />
            ))}
        </div>
        {isOpenModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay noir + flou */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Boîte du modal */}
            <div
              ref={refModal}
              className="relative z-10 bg-white p-4 rounded shadow-lg"
            >
              <Form addform={formkaban} offmodal={()=>{setIsOpenModal(false)}} ></Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
