import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import db from "../firebase/firebaseConfig"
import Response from "../interfaces/response.interface"

const useForm = (initValues: Response) => {

    const [send, setSend] = useState(false)
    const [values, setValues] = useState(initValues)

    const reset = (event: any) => {
        setValues(initValues)
        event.target.reset()
    }

    const addNewResponse = async (formResponse: any) => {
        try {
            const docRef = await addDoc(collection(db, "forms"), formResponse);
            setSend(true)
            console.log(send)

            setTimeout(() => {
                setSend(false)
                console.log(send)
            }, 4000)

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);

        }
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
        onHandlerSubmit,
        onHandlerInputChange
    }

}

export default useForm