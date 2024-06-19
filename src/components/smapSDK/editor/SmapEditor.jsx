import React, {useEffect, useState} from 'react'
import {getConfig, tipusEditor} from "./ConfiguradorEditor";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom/build/ckeditor";

const SmapEditor = ({config}) => {

  const [content, setContent] = useState("<p>Ckeditor5 integrat amb React i 100% configurable</p>");
  const [contentHTML, setContentHTML] = useState("<p>Ckeditor5 integrat amb React i 100% configurable</p>");

  const updateEditor = editor => {
    // console.log("SmapEditor > updateEditor", HTML);
    let inner = editor.getData();
    config.callback(inner);
    setContent(inner)
    console.log("innerHTML of CKEditor", inner);
  }

  useEffect(() => {
    let html = document.querySelector(".ck-restricted-editing_mode_standard.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred").innerHTML;
    setContentHTML(html);
    console.log("contentHTML", html);
  }, [content])

  return (
    <>
      <CKEditor
        editor={Editor}
        data={config?.content || content}
        config={getConfig(config?.type || tipusEditor.LITE, config?.title || false)}
        onChange={(event, editor) => {
          // let html = document.querySelector(".ck-restricted-editing_mode_standard.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred").innerHTML;
          // console.log("Que es nou", html)
          updateEditor(editor);
        }}
        disableWatchdog={false}
        disabled={config.disabled || false}
        id={"editorDeProva"}
        onBlur={() => {}}
        onError={() => {}}
        onFocus={() => {}}
        onReady={() => {}}
        watchdogConfig={{}}
      />
    </>
  )
}

export default SmapEditor