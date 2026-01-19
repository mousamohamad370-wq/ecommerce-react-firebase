import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { setDoc,doc,query,collection,where,getDocs  } from "firebase/firestore";
import { auth, database } from "./firebase-config";

export const registerUser=async ( username , email , password ) =>{
    try{
 const res =await createUserWithEmailAndPassword (auth, email,password);
 const user= res .user 
 await setDoc(doc(database, 'users',user.uid),{
    username:username,
    cartproducts: []
 })
 return {succses:true }
    }
    catch(err){
        return{ succes:false ,err:err.message};

    }
}
export const signInUser =async(email,password)=>{
    try{
    await signInWithEmailAndPassword (auth, email,password);


         return {succses:true }
    }
   
    catch(err){
          return{ succses:false ,err:err.message};

    }
     
}

export const signOutUser =async()=>{
    try{
        await signOut (auth);


         return {succses:true }
    }
   
    catch(err){
          return{ succses:false ,err:err.message};

    }
     
}

export const fetchUserData = async (user) => {
  try {
    const q = query(
      collection(database, "users"),
      where("__name__", "==", user?.uid)
    );

    const doc = await getDocs(q);

    const data = doc.docs[0].data();

    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

