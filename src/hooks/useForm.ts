import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import db from "../firebase/firebaseConfig"
import Response from "../interfaces/response.interface"

const useForm = (initValues: Response) => {

    const [send, setSend] = useState(false)
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState(initValues)

    const reset = (event: any) => {
        setValues(initValues)
        event.target.reset()
    }

    const addNewResponse = async (formResponse: any) => {

        setLoading(true)
        try {

            await addDoc(collection(db, "forms"), formResponse);

            setSend(true)
            setTimeout(() => {
                setSend(false)
            }, 6000)

        } catch (e) {
            console.log("Error description"+e)
        }
        setLoading(false)
    }

    const onHandlerSubmit = async (event: any) => {
        event.preventDefault()
        addNewResponse(values)
        reset(event)
    }

    const onHandlerInputChange = (event: any) => {
        const { name, value } = event.target

        if (name !== "terms_and_conditions") {
            setValues({
                ...values,
                [name]: value
            })
        }
    }

    return {
        send,
        loading,
        onHandlerSubmit,
        onHandlerInputChange
    }

}

export default useForm