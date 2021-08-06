import EmbedApp from "./EmbedApp.svelte";

const install = ({ firebaseConfig }) => {
  const div = document.getElementById("reactive_widget");
  const app = new EmbedApp({
    target: div,
    props: {
      firebaseConfig,
    },
  });
};

export { install };
