import React, { useEffect, useRef } from "react";
import { Modal } from "bootstrap"; // Importante: Importar Modal desde bootstrap
import SubscribersBanner from "../../buildingMaintenanceAndRestorations/components/SubscribersBanner";

const SubscribersModal = () => {
  const modalRef = useRef();

  useEffect(() => {
    // Esta función se ejecuta solo una vez cuando el componente se monta
    if (modalRef.current) {
      const bsModal = new Modal(modalRef.current, {
        keyboard: true, // Opcional : Permite que se cierre con la tecla Esc
      });
      bsModal.show(); // Muestra el modal
    }
  }, []);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef} // Asignamos la referencia al div del modal
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <SubscribersBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribersModal;
