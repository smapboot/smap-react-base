export const ModalConfirmConfiguracio = {
  texts: {
    header: "Missatge del Sistema: <br />Aquesta acció necessita confirmació",
    body: "Defineix un text millor que el que hi ha per defecte, no?<br />És només una idea, eh!",
  },
  colors: {
    header: "text-bg-danger",
    body: "text-bg-dark",
  },
  callbacks: {
    accept: () => {alert("Has clicat a acceptar")},
    cancel: () => {alert("Has clicat a cancel·lar")},
  },
};