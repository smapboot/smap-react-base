import {useContext} from "react"
import {SmapToastContext} from "../contexts/AppToastProvider.jsx"

export const useAppToast = () => {
  const {
    ContainerToaster,
    autoSavedOK,
    ToastNotify,
    toastForError,
    toastForSuccess,
    toastForInfo,
  } = useContext(SmapToastContext)
  return {
    ContainerToaster,
    autoSavedOK,
    ToastNotify,
    toastForError,
    toastForSuccess,
    toastForInfo,
  };
};
