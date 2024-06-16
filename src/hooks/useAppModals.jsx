import {useContext} from "react"
import {AppModalsContext} from "../contexts/AppModalsProvider"

export const useAppModals = () => {
  const {
    setConfirmVisible,
    RenderitzatPopupConfirmacio,
    setConfirm,
    setInformacioVisible,
    RenderitzatPopupInformatiu,
    setInfo,
    setFullscreenVisible,
    RenderitzatPopupFullscreen,
    setInfoFull,
  } = useContext(AppModalsContext)
  return {
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
};
