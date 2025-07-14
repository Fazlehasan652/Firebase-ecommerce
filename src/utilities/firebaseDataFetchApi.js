
import { db } from "../firebase.js";
import { getDocs, collection } from "firebase/firestore";


const productsCollectionRef = collection(db, "products");

const getProducts = async () => {
  const res = await getDocs(productsCollectionRef);
     const filterData = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return filterData
    };
 export const collectionData =   getProducts();
    