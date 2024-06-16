import {db} from "./firebaseConfig";
import * as fb from "firebase/firestore";
import _ from "lodash";

const config = {
  PK: "id",
}

const preventCrudUserError = (entity) => {
  if ( ! entity.hasOwnProperty("user_id") ) {
    throw new Error ("No es pot escriure a la BBDD, manca definir l'atribut del user_id")
  }
  if ( _.isEmpty(entity.user_id) ) {
    throw new Error ("No es pot escriure a la BBDD, l'user_id no pot ser buit")
  }
}

export const getUserSettings = async (user_id) => {
  try {
    const q = fb.collection(db, "users_settings")
    const querySnap = await fb.getDocs(q)
    const all = querySnap.docs.map(doc => ({
      [config.PK]: doc.id,
      ...doc.data()
    }))
    const filtered = all.filter(doc => doc.user_id === user_id)
    return ( !_.isEmpty(filtered) ) ? filtered[0] : {}
  } catch (e) {
    throw new Error(e.toString())
  }
}

export const getAllItems = async (collectionId) => {
  try {
    const q = fb.collection(db, collectionId)
    const querySnap = await fb.getDocs(q)
    return querySnap.docs.map(doc => ({
      [config.PK]: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    throw new Error(e.toString())
  }
}

export const getItemByTitle = async (collectionId, title) => {
  try {
    const q = fb.query(fb.collection(db, collectionId), fb.where("title", "==", title));
    const querySnap = await fb.getDocs(q)
    const items = querySnap.docs.map(doc => ({
      ...doc.data()
    }))
    const story = items[0];
    if ( _.isEmpty(story) ){
      return {
        status: 400,
        item: "Document not found",
      };
    } else {
      return {
        status: 200,
        item: items[0],
      };
    }
  } catch (e) {
    return {
      status: 500,
      error: new Error(e.toString()),
    };
  }
}

export const getItemById = async (collectionId, id) => {
  try {
    const q = fb.query(fb.collection(db, collectionId), fb.where("id", "==", id));
    const querySnap = await fb.getDocs(q)
    const items = querySnap.docs.map(doc => ({
      ...doc.data()
    }))
    const story = items[0];
    if ( _.isEmpty(story) ){
      return {
        status: 400,
        item: null,
        message: "Document no trobat",
      };
    } else {
      return {
        status: 200,
        item: items[0],
        message: "Document trobat",
      };
    }
  } catch (e) {
    return {
      status: 500,
      error: new Error(e.toString()),
    };
  }
}

export const getUserSession = async (uid) => {
  try {
    const q = fb.query(fb.collection(db, "sessions"), fb.where("user_id", "==", uid));
    const querySnap = await fb.getDocs(q)
    const items = querySnap.docs.map(doc => ({
      ...doc.data()
    }))
    return items[0];
  } catch (e) {
    throw new Error(e.toString());
  }
}

export const getItemsWhere = async (collectionId, field, condition, value) => {
  try {
    const q = fb.query(fb.collection(db, collectionId), fb.where(field, condition, value));
    const querySnap = await fb.getDocs(q)
    return querySnap.docs.map(doc => ({
      [config.PK]: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    throw new Error(e.toString());
  }
}

export const getItemsSortedByNewer = async (collectionId) => {
  try {
    const q = fb.query(
      fb.collection(db, collectionId),
      fb.orderBy("created_at", "desc"),
      fb.orderBy("title", "asc")
    );
    const querySnap = await fb.getDocs(q)
    return querySnap.docs.map(doc => ({
      [config.PK]: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    throw new Error(e.toString());
  }
}

export const getItemsSortedByOldest = async (collectionId) => {
  try {
    const q = fb.query(
      fb.collection(db, collectionId),
      fb.orderBy("created_at", "asc"),
      fb.orderBy("title", "asc")
    );
    const querySnap = await fb.getDocs(q)
    return querySnap.docs.map(doc => ({
      [config.PK]: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    throw new Error(e.toString());
  }
}

export const getItemsWhereOrderBy = async (collectionId, field, condition, value, order, direction) => {
  try {
    const q = fb.query(fb.collection(db, collectionId), fb.where(field, condition, value), fb.orderBy(order, direction));
    const querySnap = await fb.getDocs(q)
    return querySnap.docs.map(doc => ({
      [config.PK]: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    throw new Error(e.toString());
  }
}

export const saveSessionOfUser = async (object) => {
  const CollectionID = "sessions";
  try {
    // Obtenim referència del User
    let userExists = await getUserSession(object.user_id);
    console.log("ModelStore > saveSessionOfUser > User", userExists)
    let response;
    if ( _.isNull(userExists) ) {
      response = await createNewItem(CollectionID, object);
      if ( response.status === 200 ) {
        return {
          status: 200,
          msg: "S'ha desat una nova sessió de la vostra activitat al servidor",
        }
      } else {
        return {
          status: 500,
          msg: "Error creant sessió al servidor: " + response.message,
        }
      }
    } else {
      object.id = userExists.id;
      response = await updateSession(object);
      if ( response.status === 200 ) {
        return {
          status: 200,
          msg: "El nostre NINJA ha actualitzat la sessió de la teva activitat al servidor J.A.R.V.I.S.",
        }
      } else {
        return {
          status: 500,
          msg: "Error actualitzant sessió al servidor: " + response.message,
        }
      }
    }

  } catch (e) {
    throw new Error(e.toString());
  }
}

export const updateSession = async (session) => {
  let response;
  try {
    preventCrudUserError(session)
    const docRef = fb.doc(db, "sessions", session.id)
    await fb.updateDoc(docRef, {...session, updated_at: new Date()})
      .then(res => {
        response = {
          status: 200,
          log: docRef,
          message: "Sessió " + session.user_id + " actualitzada correctament",
          item: session
        }
      })
  } catch (err) {
    let error = err.toString()
    response = {
      status: 500,
      log: error,
      message: `[ERROR] ${error}`
    }
  }
  return response
}

export const createNewItem = async (collectionId, entity) => {
  let response
  try {
    preventCrudUserError(entity)
    const docRef = await fb.addDoc(fb.collection(db, collectionId), {...entity, created_at: new Date()})
    entity[config.PK] = docRef.id
    response = {
      status: 200,
      message: `S'ha afegit a la BBDD, un nou ítem a la col·lecció ${collectionId} amb l'identificador únic ${docRef.id}.`,
      item: entity
    }
    await updateItem(collectionId, entity)
  } catch (e) {
    let error = e.toString()
    response = {
      status: 500,
      log: error,
      message: `No s'ha pogut afegir el nou ítem a la col·lecció ${collectionId}.\n[ERROR] ${error}`
    }
  }
  return response
}

export const updateItem = async (collectionId, entity) => {
  let response
  try {
    preventCrudUserError(entity)
    let title = entity["title"]
    const docRef = fb.doc(db, collectionId, entity[config.PK])
    await fb.updateDoc(docRef, {...entity, updated_at: new Date()})
      .then(res => {
        response = {
          status: 200,
          log: docRef,
          message: "El ítem " + title + " de la col·lecció "+ collectionId +",\n s'ha actualitzat correctament a la BBDD.",
          item: entity
        }
      })
  } catch (err) {
    let error = err.toString()
    response = {
      status: 500,
      log: error,
      message: `El ítem amb id ${entity[config.PK]} de la col·lecció ${collectionId}, no s'ha pogut actualitzar.\n [ERROR] ${error}`
    }
  }
  return response
}

export const updateSettingsUser = async (settings) => {
  console.log("ModelStore > updateSettingsUser > ", {settings})
  let response
  const docRef = fb.doc(db, "users_settings", settings[config.PK])
  await fb.updateDoc(docRef, {...settings, updated_at: new Date()})
    .then(res => {
      response = {
        status: 200,
        log: docRef,
        xhr: res,
        message: "Els settings de l'usuari s'han actualitzat correctament a la BBDD.",
        item: settings
      }
    })
    .catch(e => {
      let error = e.toString()
      response = {
        status: 500,
        log: error,
        message: `No s'han pogut actualitzar els settings de l'usuari.\n [ERROR] ${error}`
      }
    })
  return response
}

export const deleteItem = async (collectionId, entity) => {
  let response
  const docRef = fb.doc(db, collectionId, entity[config.PK])
  console.log("ModelStore > deleteItem > ", {collectionId, entity, docRef})
  await fb.deleteDoc(docRef)
    .then(res => {
      response = {
        status: 200,
        log: docRef,
        message: `El ítem amb id ${entity[config.PK]} de la col·lecció ${collectionId}, s'ha eliminat de la BBDD.`
      };
    })
    .catch(e => {
      let error = e.toString()
      response = {
        status: 500,
        log: error,
        message: `El ítem amb id ${entity[config.PK]} de la col·lecció ${collectionId}, no s'ha pogut eliminar.\n [ERROR] ${error}`
      };
    });
  return response
}

export const getResultOfSearch = async (criteria) => {
  alert("@todo desenvolupar cerca a firebase");
}