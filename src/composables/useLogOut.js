import { ref } from "vue"
import { projectAuth } from "@/configs/firebase"
import { signOut } from "firebase/auth"
const error = ref(null)

async function logout() {
    error.value = null
    try {
        const respond = await signOut(projectAuth)
        return respond
    } catch (err) {
        console.log(err)
        error.value = err.message
    }
}

export function useLogOut() {
    return { error, logout }
}