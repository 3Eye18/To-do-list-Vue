import { ref } from "vue"
import { projectAuth } from "@/configs/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
const error = ref(null)
const isPending = ref(false)

async function register(email, password, fullName) {
    isPending.value = true
    error.value = null
    try {
        const respond = await createUserWithEmailAndPassword(projectAuth, email, password)
        if (!respond) throw new Error("Couldn't create new user")
        
        await updateProfile(respond.user, { displayName: fullName })
        .then(() => {console.log(respond)})
        
        return respond
    } catch (err) {
        console.log(err)
        error.value = err.message
    } finally {
        isPending.value = false
    }
}

export function useRegister() {
    return { error, isPending, register }
}