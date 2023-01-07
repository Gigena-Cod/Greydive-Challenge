import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import CardResponseComponent from "../components/CardResponse.component";
import db from "../firebase/firebaseConfig";

const ResponsesView = () => {
    const [responses, setResponses] = useState<DocumentData[]>([])

    const getResponses = async () => {

        const responsesData = await getDocs(collection(db, "forms"));

        let newArray: DocumentData[] = []
        responsesData.forEach((doc) => {
            let newDoc = doc.data()
            newArray.push(newDoc)
        });
        setResponses(newArray)
    }

    useEffect(() => {
        getResponses()
    }, [])

    return (
        <div className="bg-black p-8 h-screen responses__view">
            <div className="max-w-7xl mx-auto responses__container">
                <h1 className="text-white text-center font-semibold text-4xl">
                    RESPUESTAS
                </h1>
                <hr className="bg-white mb-8 mt-2 w-full" />
                <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-3 cards__container">
                    {
                        responses && responses.map((response: DocumentData, index: number) =>
                            (<CardResponseComponent key={index} birth_date={response.birth_date} email={response.email} full_name={response.full_name} country_of_origin={response.country_of_origin} />)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ResponsesView