import Item from "../interfaces/item.interface"

interface InputProps {
    handleChange: (event: any) => void,
    item: Item
}

const InputComponent = ({ handleChange, item }: InputProps) => {

    const { label, type, required, name } = item
    return (
        <div className={`flex ${type!=='checkbox' ? 'flex-col' :' items-center'} gap-1 w-full field_input`}>
            <label className='text-white' htmlFor={name}>
                {label}
            </label>

            <input onChange={handleChange} id={name} name={name} className={`${type!=='checkbox' ? 'w-full' :''} h-8 border rounded px-2`} type={type}
                required={required} />
        </div>
    )
}



export default InputComponent