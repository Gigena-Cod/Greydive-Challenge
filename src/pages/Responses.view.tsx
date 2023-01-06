import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
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
                <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cards__container">
                    {
                        responses && responses.map((response: DocumentData, index: number) => (
                            <div key={index} className="transition-all duration-300 select-none ease-in-out shadow  hover:shadow-white p-4 rounded border card">

                                <div className="flex gap-x-2 text-white name__full">
                                    <span className="font-bold text">
                                        Nombre completo:
                                    </span>
                                    <span className="value">
                                        {response.full_name}
                                    </span>
                                </div>
                                <div className="flex gap-x-2 text-white name__full">
                                    <span className="font-bold  text">
                                        Email:
                                    </span>
                                    <span className="value">
                                        {response.email}
                                    </span>
                                </div>
                                <div className="flex gap-x-2 text-white name__full">
                                    <span className="font-bold  text">
                                        Fecha de nacimiento:
                                    </span>
                                    <span className="value">
                                        {response.birth_date}
                                    </span>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ResponsesView