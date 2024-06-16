import React, {createContext, useState} from "react";
import {CButton, CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/react";
import {string2HTML} from "../helpers/Utils";
import {ModalConfirmConfiguracio} from "../configs/modals/ModalConfirmConfiguracio";
import {ModalInformacioConfiguracio} from "../configs/modals/ModalInformacioConfiguracio";

export const AppModalsContext = createContext();

const AppModalsProvider = (props) => {
  const {children} = props

  const [confirmVisible, setConfirmVisible] = useState(false);
  const [confirm, setConfirm] = useState(ModalConfirmConfiguracio);

  const [informacioVisible, setInformacioVisible] = useState(false);
  const [info, setInfo] = useState(ModalInformacioConfiguracio);

  const [fullscreenVisible, setFullscreenVisible] = useState(false);
  const [infoFull, setInfoFull] = useState(ModalInformacioConfiguracio);

  const RenderitzatPopupConfirmacio = (
    <>
      <CModal
        visible={confirmVisible}
        alignment="center"
        onClose={() => setConfirmVisible( false)}
      >
        <CModalHeader className={confirm.colors.header || ModalConfirmConfiguracio.colors.header}>
          <CModalTitle>
            {string2HTML(confirm.texts.header || ModalConfirmConfiguracio.texts.header)}
          </CModalTitle>
        </CModalHeader>
        <CModalBody className={confirm.colors.body || ModalConfirmConfiguracio.colors.body}>
          <div>
          {string2HTML(confirm.texts.body || ModalConfirmConfiguracio.texts.body)}
          </div>
          <CButton
            color={"success"}
            className={"float-left"}
            onClick={() => {
              setConfirmVisible( false);
              confirm.callbacks.accept()
            }}>
            Confirmar
          </CButton>
          <CButton
            color={"danger"}
            className={"float-right"}
            onClick={() => {
              setConfirmVisible( false);
              confirm.callbacks.cancel()
            }}>
            Cancel·lar
          </CButton>
        </CModalBody>
      </CModal>
    </>
  );
  
  const RenderitzatPopupInformatiu = (
    <>
      <CModal
        visible={informacioVisible}
        alignment="center"
        onClose={() => setInformacioVisible( false)}
        size={"xl"}
      >
        <CModalHeader className={info.colors.header || ModalInformacioConfiguracio.colors.header}>
          <CModalTitle>
            {string2HTML(info.texts.header || ModalInformacioConfiguracio.texts.header)}
          </CModalTitle>
        </CModalHeader>
        <CModalBody className={info.colors.body || ModalInformacioConfiguracio.colors.body}>
          {string2HTML(info.texts.content || ModalInformacioConfiguracio.texts.content)}
        </CModalBody>
      </CModal>
    </>
  )

  const RenderitzatPopupFullscreen = (
    <>
      <CModal
        fullscreen
        visible={fullscreenVisible}
        onClose={() => setFullscreenVisible( false)}
      >
        <CModalHeader className={info.colors.header || ModalInformacioConfiguracio.colors.header}>
          <CModalTitle>
            {string2HTML(info.texts.header || ModalInformacioConfiguracio.texts.header)}
          </CModalTitle>
        </CModalHeader>
        <CModalBody className={info.colors.body || ModalInformacioConfiguracio.colors.body}>
          {string2HTML(info.texts.content || ModalInformacioConfiguracio.texts.content)}
        </CModalBody>
      </CModal>
    </>
  )

  const AppModalsAPI = {
    setConfirmVisible,
    RenderitzatPopupConfirmacio,
    setConfirm,
    setInformacioVisible,
    RenderitzatPopupInformatiu,
    setInfo,
    setFullscreenVisible,
    RenderitzatPopupFullscreen,
    setInfoFull,
  };

  return <AppModalsContext.Provider value={AppModalsAPI} children={children}/>
}

export default AppModalsProvider