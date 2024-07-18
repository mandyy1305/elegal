import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { currentUsername, setCurrentUsername } from "./gloabalValues";

export const SignUpUsername = async (username) => {
    try{
        const collectionRef = collection(db, "users");
        const docRef = doc(collectionRef, username);
        const docSnap = await setDoc(docRef, {
            username
        });

        setCurrentUsername(username);

        console.log("Done baby")
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const UploadProviderDetails = async (details) => {
    try{
        const collectionRef = collection(db, "users");
        const docRef = doc(collectionRef, currentUsername);
        const docSnap = await setDoc(docRef, {
            details
        }, {merge: true});
        console.log("Uploaded user details succ")
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}