import dataForm from '.././data/db.json'
import useForm from '../hooks/useForm.component';
import Item from '../interfaces/item.interface'
import Response from '../interfaces/response.interface';
import ButtonComponent from './Button.component'
import InputComponent from './Input.component'
import NotificationPopupComponent from './Modal.component';
import SelectComponent from './Select.component'

const initValues: Response = {
    birth_date: "",
    email: "",
    full_name: "",
    country_of_origin: ""
}

const FormComponent = () => {

    const fields: Item[] = dataForm.items
    const { send, onHandlerSubmit, onHandlerInputChange } = useForm(initValues)

    return (

        <>
            <form onSubmit={onHandlerSubmit} className="rounded hover:shadow-xl transition-all duration-500 ease-in-out bg-black bg-opacity-40 w-full md:w-[26rem] mx-auto p-5 grid grid-cols-1 gap-6 form_container">

                {fields && fields.map((item, index) => (

                    <div key={index} className="flex gap-2 item">

                        {['text', 'email', 'date', 'checkbox'].includes(item.type) && <InputComponent
                            handleChange={onHandlerInputChange} item={item} />}

                        {item.type === 'select' && <SelectComponent handleChange={onHandlerInputChange} item={item} />}

                        {item.type === 'submit' && <ButtonComponent {...item} />}
                    </div>
                ))}
            </form>
            <NotificationPopupComponent send={send} />
        </>
    )
}


export default FormComponent