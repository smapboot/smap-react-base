import React, {createRef, useState} from 'react'
import {CCol, CContainer, CRow} from "@coreui/react";
import {string2HTML} from "../helpers/Utils";
import {Store} from "../stores";
import {Editor, tipusEditor} from "../components/smapSDK/editor";

const DemoEditorRichText = () => {

  const domEditor = createRef();

  const[contingutEditorPREVIEW, setContingutEditorPREVIEW] = useState();
  // const updateDataEditorPREVIEW = content => {
  //   console.log("DemoEditorRichText > updateDataEditorPREVIEW", content);
  //   setContingutEditorLITE(content);
  //   Store.saveStorage("content", content);
  // }
  const configuracioPREVIEW = {
    type: tipusEditor.PREVIEW,
    title: false,
    disabled: true,
    content: contingutEditorPREVIEW,
    callback: () => {
      console.log("Preview working?", contingutEditorPREVIEW);
    },
  }

  const[contingutEditorLITE, setContingutEditorLITE] = useState();
  const updateDataEditorLITE = content => {
    console.log("DemoEditorRichText > updateDataEditorLITE", content);
    setContingutEditorLITE(content);
    setContingutEditorPREVIEW(content);
    // Store.saveStorage("content", content);
  }
  // Instància i renderitzat d'un editor amb la configuració LITE
  const configuracioEditorLITE = {
    type: tipusEditor.LITE,
    title: false,
    content: "<p>SmapEditor LITE amb plugin títol desactivat</p>",
    callback: updateDataEditorLITE,
  }

  return (
    <main>
      <CContainer>
        <CRow>
          <CCol className={"col-12"}>
            <h2>Demo de Editor Rich Text</h2>
            <ul className={"list-inline"}>
              <li className={"list-group-item"}>
                <h3>Demo editor mini</h3>
                <CRow>
                  <CCol className={"col-6"}>
                    <Editor config={configuracioEditorLITE} />
                  </CCol>
                  <CCol className={"col-6"}>
                      <h4>Vista prèvia</h4>
                      <div className={"preview-content"}>
                        <Editor config={configuracioPREVIEW} />
                      </div>
                  </CCol>
                </CRow>
              </li>
              {/*<li className={"list-group-item"}>*/}
              {/*  <h3>Demo editor mitjà</h3>*/}
              {/*  <SmapEditor config={configuracioEditorMEDIUM} />*/}
              {/*</li>*/}
              {/*<li className={"list-group-item"}>*/}
              {/*  <h3>Demo editor Full</h3>*/}
              {/*  <SmapEditor config={configuracioEditorFULL} />*/}
              {/*</li>*/}
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  )
}

export default DemoEditorRichText