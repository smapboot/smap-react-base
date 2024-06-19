import _ from "lodash";

export const saveStorage = (key, value) => {
  if (!_.isEmpty(value)) {
    console.log(`Desem a storage [${key}]`, value)
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const getNode = (key, child) => {
  let parent = JSON.parse(localStorage.getItem(key));
  return parent?.[child];
}

export const resetStorage = () => {
  localStorage.clear();
}

export const deleteStorage = (key) => {
  localStorage.removeItem(key);
}