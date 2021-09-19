import {
  getAuth,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { readable } from "svelte/store";

export const initAuth = () => {
  const auth = getAuth();

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(async (result) => {
      const { user } = result;
      if (!user) {
        return;
      }
      if (user.metadata.creationTime == user.metadata.lastSignInTime) {
        const db = getDatabase();
        const userInfoRef = ref(db, `users/info/${user.uid}`);
        await set(userInfoRef, {
          name: user.displayName.split(" ")[0],
          photo: user.photoURL,
        });
        await updateProfile(user, {
          displayName: user.displayName.split(" ")[0],
        });
      }
    });
  };
  const logout = () => signOut(auth);

  const authStore = readable({ user: null, loading: true }, (set) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        set({
          user: { ...user, displayName: user.displayName.split(" ")[0] },
          loading: false,
        });
      } else {
        set({ user: null, loading: false });
      }
    });
    return unsubscribe;
  });

  return { authStore, loginWithGoogle, logout };
};
