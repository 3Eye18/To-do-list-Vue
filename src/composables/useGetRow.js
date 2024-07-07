import { ref } from "vue"
import { projectFirestore } from "@/configs/firebase"
import { getDocs, collection, getDoc, doc } from "firebase/firestore"

const useGetRow = (name) => {
    const error = ref(null)
    
    async function getAllRow() {
        error.value = null
        try {
            const respond  = await getDocs(collection(projectFirestore, name))
            return respond.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (err) {
            console.log(err)
            error.value = err.message
        }
    }

    async function getOneRow(docId) {
        error.value = null
        try {
            const respond = await getDoc(doc(projectFirestore, name, docId))
            return { name: respond.data().name, desc: respond.data().desc }
        } catch (err) {
            console.log(err)
            error.value = err.message
        }
    }

    return { error, getAllRow, getOneRow }
}

export default useGetRow