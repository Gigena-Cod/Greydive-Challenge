import Item from "../interfaces/item.interface"
import Option from "../interfaces/option.interface"

interface SelectProps {
    handleChange: (event:any) => void,
    item: Item
}
const SelectComponent = ({ handleChange, item }: SelectProps) => {
    const { label, name, options } = item

    return (
        <>
            <label className='text-white'>
                {label}
            </label>
            <select onChange={handleChange} className='rounded px-2 h-8 items-center' name={name} id="">
                {
                    options?.map((itemOption: Option, index: number) => (
                        <option key={index} className='h-8' value={itemOption.value}>
                            {itemOption.label}
                        </option>
                    ))
                }
            </select>
        </>
    )
}



export default SelectComponent