import Item from "../interfaces/item.interface"



const ButtonComponent = (item: Item) => (
    <div className="button">
        <input className='rounded w-36 h-10 font-semibold hover:bg-white bg-black hover:text-black text-white transition-all duration-300 border border-white ease-in cursor-pointer uppercase' {...item} />
    </div>
)


export default ButtonComponent
