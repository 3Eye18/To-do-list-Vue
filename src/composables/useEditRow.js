import { ref } from "vue"
import { projectFirestore } from "@/configs/firebase"
import { doc, updateDoc } from "firebase/firestore"

const useEditRow = (collectionName) => {
    const error = ref(null)
    
    async function editRow(docId, fields) {
        try {
            const docRef = doc(projectFirestore, collectionName, docId);
            const { name, desc } = fields; // Destructure name and desc from fields

            const fieldData = {
                name: name.value, // Use .value to access ref value
                desc: desc.value,
            };

            await updateDoc(docRef, fieldData); // Update document with new values
            alert("Document updated successfully!");
        } catch (error) {
            console.error("Error updating document:", error);
        }
    }

    return { error, editRow }
}

export default useEditRow