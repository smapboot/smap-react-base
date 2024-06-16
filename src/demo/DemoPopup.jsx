import React from 'react'
import {CButton, CCol, CContainer, CRow} from "@coreui/react";
import {useAppModals} from "../hooks/useAppModals.jsx";
import {ModalInformacioConfiguracio} from "../configs/modals/ModalInformacioConfiguracio.js";
import {ModalConfirmConfiguracio} from "../configs/modals/ModalConfirmConfiguracio.js";

const DemoPopup = () => {

  const {
    setInformacioVisible,
    setInfo,
    setFullscreenVisible,
    setInfoFull,
    setConfirmVisible,
    setConfirm,
  } = useAppModals();

  const configInfo = ({
    ...ModalInformacioConfiguracio,
    texts: {
      header: "Notícies SMAPBCN",
      content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    },
    colors: {
      header: "text-bg-default",
      body: "text-bg-info"
    }
  })
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
            <h2>Demo Popups</h2>
            <ul className={"list-inline"}>
              <li className={"list-inline-item"}>
                <CButton color={"primary"} onClick={() => {
                  setInformacioVisible(true);
                  setInfo(configInfo);
                }}>Pop-up informatiu</CButton>
              </li>
              <li className={"list-inline-item"}>
                <CButton color={"dark"} onClick={() => {
                  setFullscreenVisible(true);
                  setInfoFull(configInfo);
                }}>Pop-up fullscreen</CButton>
              </li>
              <li className={"list-inline-item"}>
                <CButton color={"primary"} onClick={() => {
                  setConfirmVisible(true);
                  setConfirm(configDelete.confirm);
                }}>Pop-up confirm demo</CButton>
              </li>
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  )
}

export default DemoPopup