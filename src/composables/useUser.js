import { ref } from "vue"
import { projectAuth } from "@/configs/firebase"

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(function(_user) {
    if (_user) user.value = _user
})

function getuser() {
    return { user }
}

export function useUser() {
    return { getuser }
}