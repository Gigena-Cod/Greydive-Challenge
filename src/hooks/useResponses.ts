import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useState } from "react";
import db from "../firebase/firebaseConfig";

const useResponseData = () => {

    const [responsesData, setResponsesData] = useState<DocumentData[]>([])
    const [loading, setLoading] = useState(false)


    const getResponsesData = async () => {
        setLoading(true)
        const responsesData = await getDocs(collection(db, "forms"));

        let newArray: DocumentData[] = []
        responsesData.forEach(doc => newArray.push(doc.data()));
        setResponsesData(newArray)
        setLoading(false)
    }



    return {
        responsesData,
        getResponsesData,
        loading
    }
}

export default useResponseData