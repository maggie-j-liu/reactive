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
        if (!user) {
          return;
        }
        if (additionalUserInfo.isNewUser) {
          const db = firebase.database();
          const userInfoRef = db.ref(`users/info/${user.uid}`);
          await userInfoRef.set({
            name: user.displayName,
            photo: user.photoURL,
          });
        }
      });
  };
  const logout = () => auth.signOut();

  const authStore = readable({ user: null, loading: true }, (set) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        set({ user: user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
    return unsubscribe;
  });

  return { authStore, loginWithGoogle, logout };
};
