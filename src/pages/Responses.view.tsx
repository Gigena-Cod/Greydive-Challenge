import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import CardResponseComponent from "../components/CardResponse.component";
import SpinnerComponent from "../components/Spinner.component";
import useResponseData from "../hooks/useResponses";

const ResponsesView = () => {
    const { responsesData, getResponsesData, loading } = useResponseData()

    useEffect(() => {
        getResponsesData()
    }, [])

    return (
        <div className="background p-8 min-h-screen w-full responses__view">
            <div className="max-w-7xl w-full mx-auto responses__container">
                <h1 className="text-center text-white font-semibold text-4xl">
                    RESPUESTAS
                </h1>
                <hr className="bg-[#E5F876] mb-10 mt-2 w-full" />
                {
                    loading ? (<SpinnerComponent cssClassIcon={"h-16 w-16"} />)
                        : (<div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards__container">
                            {
                                responsesData.map((response: DocumentData, index: number) =>
                                    (<CardResponseComponent key={index} birth_date={response.birth_date} email={response.email} full_name={response.full_name} country_of_origin={response.country_of_origin} />)
                                )
                            }

                        </div>)
                }
            </div>
        </div>
    )
}

export default ResponsesView