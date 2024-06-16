import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faRadiation, faWifi} from "@fortawesome/free-solid-svg-icons";

export const HelperConstants = {

  MODALS_CRUD: {
    SUCCESS: {
      icon: (<FontAwesomeIcon className={"iconeModalCrud text-success"} icon={faCircleCheck} bounce size="xl" />),
      color: 'info',
    },
    ERROR: {
      icon: (<FontAwesomeIcon className={"iconeModalCrud text_violet"} icon={faRadiation} fade size="xl" />),
      color: 'dark'
    },
    DANGER: {
      icon: (<FontAwesomeIcon className={"iconeModalCrud text_red"} icon={faRadiation} fade size="xl" />),
      color: 'dark'
    },
    INFO: {
      title: 'Undefined',
      message: 'Undefined',
      icon: (<FontAwesomeIcon className={"iconeModalCrud text-info"} icon={faWifi} size="xl" />),
      color: 'light'
    }
  },

  PK: 'primary_key',

  KEYS_STORAGE: {
    USER: 'user',
    RELEASE: 'release',
    VIEWER: 'viewer',
  },

  PROVIDERS: {
    USER: 'UserProvider',
  },

  VIEWERS: {
    GRID: 'grid',
    TABLE: 'table',
  },

  ALERT_COLOR: {
    OK: "success",
    KO: "danger",
  },

  DB_COLLECTIONS: {
    ARTICLES: 'publications',
  },

};
