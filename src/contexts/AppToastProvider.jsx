import React, {createContext} from "react";
import {ToastContainer, toast, Bounce, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {string2HTML} from "../helpers/Utils";

export const SmapToastContext = createContext();

const AppToastProvider = (props) => {
  const {children} = props

  const ContainerToaster = (
    <ToastContainer />
  );

  const ToastNotify = (content, options) => {
    toast(content, options);
  };

  const autoSavedOK = () => {
    const content = (
      <>
        <p>
          El Sistema ha desat correctament les dades actuals al Servidor.
        </p>
      </>
    )
    const conf_random = {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce
    }
    toast(content, conf_random)
  };

  const toastForInfo = (content) => {
    let time;
    if ( content.length < 50 ) {
      time = Math.round( ( content.length / 20 ) * 1000 );
    } else if ( content.length > 50 && content.length < 100 ) {
      time = Math.round( ( content.length / 30 ) * 1000 );
    } else if ( content.length > 100 ) {
      time = Math.round( ( content.length / 40 ) * 1000 );
    } else {
      time = 3000;
    }

    const conf_random = {
      position: "top-center",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Flip
    }
    toast.info(string2HTML(content), conf_random)
  };

  const toastForError = (content) => {
    const conf_random = {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Flip
    }
    toast.error(content, conf_random)
  };

  const toastForSuccess = (content) => {
    const conf_random = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Flip
    }
    toast.success(content, conf_random)
  };


  const SmapToastAPI = {
    ContainerToaster,
    autoSavedOK,
    ToastNotify,
    toastForError,
    toastForSuccess,
    toastForInfo,
  };

  return <SmapToastContext.Provider value={SmapToastAPI} children={children}/>
}

export default AppToastProvider