import { ref } from "vue"
import { projectAuth } from "@/configs/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const error = ref(null)
const isPending = ref(false)

async function login(email, password) {
    isPending.value = true
    error.value = null
    try {
        const respond = await signInWithEmailAndPassword(projectAuth, email, password)
        console.log(respond)
        return respond
    } catch (err) {
        console.log(err)
        error.value = err.message
    } finally {
        isPending.value = false
    }
}

export function useLogIn() {
    return { error, isPending, login }
}