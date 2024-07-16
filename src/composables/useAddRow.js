import { ref } from "vue"
import { projectFirestore } from "@/configs/firebase"
import { addDoc, collection } from "firebase/firestore"

const useAddRow = (collectionName) => {
    const error = ref(null)
    
    async function addRow(fields) {
        error.value = null
        try {
            const { name, desc } = fields; // Destructure name and desc from fields

            const fieldData = {
                name: name.value, // Use .value to access ref value
                desc: desc.value,
            };

            await addDoc(collection(projectFirestore, collectionName), fieldData)
            alert("Added note successfully")
            window.location.href = "./";
        } catch (err) {
            console.log(err)
            error.value = err.message
        }
    }

    return { error, addRow }
}

export default useAddRow
