import React, {useState} from 'react'
import {getConfig, tipusEditor} from "./ConfiguradorEditor";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom/build/ckeditor";

const SmapEditor = ({config}) => {

  const [content, setContent] = useState("<p>Ckeditor5 integrat amb React i 100% configurable</p>");

  const updateEditor = editor => {
    let content = editor.getData();
    console.log("SmapEditor > updateEditor", content);
    setContent(content);
    config.callback(content);
  }

  return (
    <>
      <CKEditor
        editor={Editor}
        data={config.content || content}
        config={getConfig(config.type || tipusEditor.LITE, config.title || false)}
        onChange={(event, editor) => {
          updateEditor(editor);
        }}
        disableWatchdog={false}
        disabled={false}
        id={null}
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