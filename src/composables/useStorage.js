import { ref } from "vue"
import { projectStorage } from "@/configs/firebase"
import { useUser } from "./useUser"
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"

const { getuser } = useUser()
const { user } = getuser()

const useStorage = (name) => {
    const error = ref(null)
    const filePath = ref(null)
    const url = ref(null)

    async function uploadFile(file) {
        filePath.value = `${name}/${user.value.uid}/${file.name}`
        console.log("filePath: ",filePath)

        const fileRef = storageRef(projectStorage, filePath.value)
        console.log("fileRef: ",fileRef)

        error.value = null

        try {
            const respond = await uploadBytes(fileRef, file)

            url.value = getDownloadURL(respond.ref)
            return url.value
        } catch (err) {
            console.log(err)
            error.value = err.message
        }
    }

    return { error, filePath, url, uploadFile }
}

export default useStorage