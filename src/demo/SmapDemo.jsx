import React from 'react'
import {useAppModals} from "../hooks/useAppModals.jsx";
import {CCol, CContainer, CRow} from "@coreui/react";
import {useAppToast} from "../hooks/useAppToast.jsx";
import DemoEditorRichText from "./DemoEditorRichText";
// import DemoBotons from "./DemoBotons.jsx";
// import DemoToast from "./DemoToast.jsx";
// import DemoPopup from "./DemoPopup.jsx";

const SmapDemo = () => {

  const {
    ContainerToaster,
  } = useAppToast();

  const {
    RenderitzatPopupConfirmacio,
    RenderitzatPopupInformatiu,
    RenderitzatPopupFullscreen,
  } = useAppModals();

  return (
    <main>
      <CContainer>
        <h1>Smap Components DEMOS</h1>
        {/*<CRow>*/}
        {/*  <CCol className={"col-12"}>*/}
        {/*    <DemoBotons />*/}
        {/*  </CCol>*/}
        {/*</CRow>*/}
        {/*<CRow>*/}
        {/*  <CCol className={"col-12"}>*/}
        {/*    <DemoToast />*/}
        {/*  </CCol>*/}
        {/*</CRow>*/}
        {/*<CRow>*/}
        {/*  <CCol className={"col-12"}>*/}
        {/*    <DemoPopup />*/}
        {/*  </CCol>*/}
        {/*</CRow>*/}
        <CRow>
          <CCol className={"col-12"}>
            <DemoEditorRichText />
          </CCol>
        </CRow>
      </CContainer>
      {ContainerToaster}
      {RenderitzatPopupConfirmacio}
      {RenderitzatPopupInformatiu}
      {RenderitzatPopupFullscreen}
    </main>
  )
}

export default SmapDemo