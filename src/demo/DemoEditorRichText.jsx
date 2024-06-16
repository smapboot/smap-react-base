import React, {useState} from 'react'
import {CCol, CContainer, CRow} from "@coreui/react";
import {tipusEditor} from "../components/smapSDK/editor/ConfiguradorEditor.jsx";
import SmapEditor from "../components/smapSDK/editor/SmapEditor";
import {string2HTML} from "../helpers/Utils";
import {Store} from "../stores";

const DemoEditorRichText = () => {

  const[contingutEditorLITE, setContingutEditorLITE] = useState();
  const updateDataEditorLITE = content => {
    console.log("DemoEditorRichText > updateDataEditorLITE", content);
    setContingutEditorLITE(content);
    Store.saveStorage("content", content);
  }
  // Instància i renderitzat d'un editor amb la configuració LITE
  const configuracioEditorLITE = {
    type: tipusEditor.MEDIUM,
    title: false,
    content: "<p>SmapEditor LITE amb plugin títol desactivat</p>",
    callback: updateDataEditorLITE,
  }


  // const[contingutEditorMEDIUM, setContingutEditorMEDIUM] = useState();
  // const updateDataEditorMEDIUM = editor => {
  //   let content = editor.getData();
  //   console.log("DemoEditorRichText > updateDataEditorMEDIUM", content);
  //   setContingutEditorMEDIUM(content);
  // }
  // // Instància i renderitzat d'un editor amb la configuració MEDIUM
  // const configuracioEditorMEDIUM = {
  //   editor: getConfig(getConfig(tipusEditor.MEDIUM, true)),
  //   content: "SmapEditor MEDIUM amb plugin títol activat",
  //   callback: updateDataEditorMEDIUM,
  // }
  //
  // const[contingutEditorFULL, setContingutEditorFULL] = useState();
  // const updateDataEditorFULL = editor => {
  //   let content = editor.getData();
  //   console.log("DemoEditorRichText > updateDataEditorFULL", content);
  //   setContingutEditorFULL(content);
  // }
  // // Instància i renderitzat d'un editor amb la configuració FULL
  // const configuracioEditorFULL = {
  //   editor: getConfig(getConfig(tipusEditor.FULL, false)),
  //   content: "SmapEditor FULL amb plugin títol desactivat",
  //   callback: updateDataEditorFULL,
  // }


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
                    <SmapEditor config={configuracioEditorLITE} />
                  </CCol>
                  <CCol className={"col-6"}>
                      <h4>Vista prèvia</h4>
                      <div className={"preview-content"}>
                        {string2HTML(contingutEditorLITE)}
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