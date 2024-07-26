import { ref } from "vue"
import { projectAuth, projectFirestore } from "@/configs/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
const error = ref(null)
const isPending = ref(false)

async function signup(email, password) {
    isPending.value = true
    error.value = null
    try {
        // Creating new user
        const respond = await createUserWithEmailAndPassword(projectAuth, email, password)
        if (!respond) throw new Error("Couldn't create new user")
        
        // Creating new collection for the user
        const newCollection = collection(projectFirestore, email)
        const docRef = await addDoc(newCollection, {
            name: "Hello " + email,
            desc: "This is your demo note!"
        })
        console.log("Document written with ID: ", docRef.id);

        return respond
    } catch (err) {
        console.log(err)
        error.value = err.message
    } finally {
        isPending.value = false
    }
}

export function useSignUp() {
    return { error, isPending, signup }
}