import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react'
import dataForm from '.././data/db.json'
import db from "../firebase/firebaseConfig";
import Item from '../interfaces/item.interface'
import ButtonComponent from './Button.component'
import InputComponent from './Input.component'
import SelectComponent from './Select.component'
const FormComponent = () => {

    const fields: Item[] = dataForm.items

    const [formData, setFormData] = useState({})

    const handleInputChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const onHandlerSubmit = async (event: any) => {
        event.preventDefault()
        console.log('onHandlerSubmit')
        addNewResponse(formData)
        reset(event)
    }

    const reset = (event: any) => {
        setFormData({})
        event.target.reset()
    }

    const addNewResponse = async (formResponse: any) => {
        try {
            const docRef = await addDoc(collection(db, "forms"), formResponse);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);

        }
    }
    return (

        <form onSubmit={onHandlerSubmit} className="grid grid-cols-1 gap-8 form_container">

            {
                fields && fields.map((item, index) => (

                    < div key={index} className="flex gap-2 item" >

                        {['text', 'email', 'date', 'checkbox'].includes(item.type) && <InputComponent
                            handleChange={handleInputChange} item={item} />}

                        {item.type === 'select' && <SelectComponent handleChange={handleInputChange} item={item} />}

                        {item.type === 'submit' && <ButtonComponent {...item} />}
                    </div>
                ))
            }


        </form >
    )
}


export default FormComponent