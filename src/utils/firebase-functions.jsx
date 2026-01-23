import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword ,
    signOut} 
    from "firebase/auth";
import { setDoc,
    doc,
    query,
    collection,
    where,
    getDocs  } 
    from "firebase/firestore";
import { auth,
     database } 
     from "./firebase-config";
import { updateDoc, 
    arrayUnion ,
    arrayRemove,
    onSnapshot} 
    from "firebase/firestore";

export const registerUser=async ( username , email , password ) =>{
    try{
 const res =await createUserWithEmailAndPassword (auth, email,password);
 const user= res .user ;




 await setDoc(doc(database, 'users',user.uid),{
    username:username,
    cartproduct: []
 })



 return {success:true }
    }
    catch(err){
        return{ success:false ,err:err.message};

    }
}
export const signInUser =async(email,password)=>{
    try{
    await signInWithEmailAndPassword (auth, email,password);


         return {success:true }
    }
   
    catch(err){
          return{ success:false ,err:err.message};

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


export  const updateArrayData=async(product)=>{
    const user=auth.currentUser;
const docRef=doc(database,"users",user.uid);
    try{

    await updateDoc(docRef,{
        cartproduct:arrayUnion(product)
    })
     return { success: true };
     console.log("added to cart");
    }

    
    catch(error){
         return{ success:false ,error:error.message};
         console.error("❌ Firestore error:", error.message);

    }
};
export  const removeArrayData=async(product)=>{
    const user=auth.currentUser;
const docRef=doc(database,"users",user.uid);
    try{

    await updateDoc(docRef,{
        cartproduct:arrayRemove(product),
    });
     return { success: true };
    }

    
    catch(error){
         return{ success:false ,error:error.message};

    }
}
export const setupDBListener = (user, callback) => {
  const docRef = doc(database, "users", user.uid);

  return onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      const data = doc.data();
      callback(data["cartproduct"]);
    }
  });
};

