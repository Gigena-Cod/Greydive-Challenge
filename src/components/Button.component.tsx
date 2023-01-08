import Item from "../interfaces/item.interface"
import SpinnerComponent from "./Spinner.component"

interface ButtonProps {
    item: Item
    loading: boolean
}

const ButtonComponent = ({ item, loading }: ButtonProps) => (
    <>
        {
            loading
                ? <SpinnerComponent cssClassIcon={"h-6 w-6"} />
                : (<div className="w-full bg-[#EAFF6A] rounded button">
                    <input className='rounded w-full h-10 text-[#1F2023] transition-all duration-300 ease-in cursor-pointer uppercase' {...item} />
                </div>)
        }
    </>
)


export default ButtonComponent
