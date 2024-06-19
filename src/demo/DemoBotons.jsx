import React from 'react'
import {CCol, CContainer, CRow} from "@coreui/react";
import {BotoCrear, BotoEliminar} from "../components/index.js";
import {useAppToast} from "../hooks/useAppToast.jsx";
import {ModalConfirmConfiguracio} from "../configs/modals/ModalConfirmConfiguracio.js";

const DemoBotons = () => {

  const {
    toastForInfo,
  } = useAppToast();

  const configDelete = {
    label: "Eliminar PAP",
    confirm: (() => ({
      ...ModalConfirmConfiguracio,
      // colors: {
      //   header: "text-bg-info",
      //   body: "text-bg-warning",
      // },
      texts: {
        // header: "Warning, Atchung, Compte",
        body: "Vols eliminar el PAP amb ID xxxxxxxxxx?",
      },
      callbacks: {
        accept: (() => {
          alert("Eliminar el PAP gràcies")
        }),
        cancel: (() => {
          alert("No gràcies, m'ho he pensat millor!!");
        }),
      }
    })),
  };

  return (
    <main>
      <CContainer>
        <CRow>
          <CCol className={"col-12"}>
            <h2>Demo de Botons</h2>
            <ul className={"list-inline"}>
              <li className={"list-inline-item"}>
                <BotoCrear config={{
                  label: "Crear nou kanban",
                  callback: () => {
                    toastForInfo("Obrir el formulari per crear un nou kanban");
                  }
                }} />
              </li>
              <li className={"list-inline-item"}>
                <BotoEliminar config={configDelete} />
              </li>
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  )
}

export default DemoBotons