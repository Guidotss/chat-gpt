import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { firebaseAuth } from './config';



const googleProvider = new GoogleAuthProvider(); 

export const signInWithGoogle = async() => {
    
    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, email, uid,providerId, photoURL } = result.user; 

        return {
            ok: true,
            user: {
                displayName,
                email,
                uid,
                providerId,
                photoURL
            }
        }
    }catch(err:any){
        console.log(err); 
        return {
            ok: false,
            error: err.message
        }
    }
}
