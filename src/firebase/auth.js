import firebase from "firebase/app";
import "firebase/auth";
import { readable } from "svelte/store";

export const initAuth = () => {
  const auth = firebase.auth();

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth
      .signInWithPopup(provider)
      .then(async ({ user, additionalUserInfo }) => {
        console.log(additionalUserInfo);
        if (!user) {
          return;
        }
        if (additionalUserInfo.isNewUser) {
          const db = firebase.database();
          const userInfoRef = db.ref(`users/${user.uid}/info`);
          await userInfoRef.set({
            name: user.displayName,
            photo: user.photoURL,
          });
        }
      });
  };
  const logout = () => auth.signOut();

  const user = readable(null, (set) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        set(user);
      } else {
        set(null);
      }
    });
    return unsubscribe;
  });

  return { user, loginWithGoogle, logout };
};
