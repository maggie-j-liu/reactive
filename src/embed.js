import EmbedApp from "./EmbedApp.svelte";

const install = ({
  firebaseConfig,
  reactions,
  page,
  reactionText,
  paymentPointer,
  primaryColors,
  secondaryColors,
}) => {
  const div = document.getElementById("reactive_widget");
  const app = new EmbedApp({
    target: div,
    props: {
      firebaseConfig,
      page,
      reactions,
      reactionText,
      paymentPointer,
      primaryColors,
      secondaryColors,
    },
  });
};

const reactive = {};
reactive.install = install;

export default reactive;
