import React from 'react'
import {useAppToast} from "../hooks/useAppToast.jsx";
import {CButton, CCol, CContainer, CRow} from "@coreui/react";

const DemoToast = () => {

  const {
    autoSavedOK,
    toastForSuccess,
    toastForError,
    toastForInfo,
  } = useAppToast();

  return (
    <main>
      <CContainer>
        <h2>Demo de toast</h2>
        <CRow>
          <CCol className={"col-12"}>
            <ul className={"list-inline"}>
              <li className={"list-inline-item"}>
                <CButton
                  color={"warning"}
                  onClick={autoSavedOK}>
                  Toast Autosave
                </CButton>
              </li>
              <li className={"list-inline-item"}>
                <CButton
                  color={"success"}
                  onClick={() => toastForSuccess("Canvis desats OK!")}>
                  Demo success
                </CButton>
              </li>
              <li className={"list-inline-item"}>
                <CButton
                  color={"danger"}
                  onClick={() => toastForError("Canvis desats KO")}>
                  Demo error
                </CButton>
              </li>
              <li className={"list-inline-item"}>
                <CButton
                  color={"info"}
                  onClick={() => toastForInfo("Toast for info!!!")}>
                  Demo info
                </CButton>
              </li>
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  )
}

export default DemoToast