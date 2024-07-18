import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { currentUsername, setCurrentUsername } from "./gloabalValues";

export const SignUpUsername = async (username, email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await setDoc(docRef, {
      username,
    });

    setCurrentUsername(username);

    console.log("Done baby");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const UploadProviderDetails = async (details, email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await setDoc(
      docRef,
      {
        details,
      },
      { merge: true }
    );

    const docSnap2 = await setDoc(
      docRef,
      {
        type: "provider",
      },
      { merge: true }
    );

    console.log("Uploaded user details succ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const UploadClientDetails = async (details, email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await setDoc(
      docRef,
      {
        details,
      },
      { merge: true }
    );

    const docSnap2 = await setDoc(
      docRef,
      {
        type: "client",
      },
      { merge: true }
    );

    console.log("Uploaded user details succ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const FetchProviderDetails = async (email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return {};
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
