import { ref } from "vue"
import { projectFirestore } from "@/configs/firebase"
import { doc, deleteDoc } from "firebase/firestore"

const useDeleteRow = (name, docDatas) => {
    const error = ref(null)
    
    async function deleteRow(docId) {
        const confirmDelete = confirm("Are you sure you want to delete this document?");
        if (!confirmDelete) return;

        try {
            // Access the document reference based on ID
            const docRef = doc(projectFirestore, name, docId);
            await deleteDoc(docRef); // Delete document from Firestore

            // Update the local docDatas array (optional)
            docDatas.value = docDatas.value.filter(doc => doc.id !== docId);

            console.log("Document deleted successfully!");
        } catch (err) {
            console.error("Error deleting document:", err);
        }
    }

    return { error, deleteRow }
}

export default useDeleteRow