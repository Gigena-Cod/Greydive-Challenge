import Response from "../interfaces/response.interface"

const CardResponseComponent = ({ full_name, email, birth_date, country_of_origin }: Response) => {
    return (
        <div className="transition-all duration-300 select-none ease-in-out bg-[#EAFF6A]  hover:shadow p-4 rounded-lg card">

            <div className="flex gap-x-2 text-[#1F2023] name__full">
                <span className="min-w-[9rem] font-bold text">
                    Nombre completo:
                </span>
                <span className="truncate value">
                    {full_name}
                </span>
            </div>
            <div className="flex gap-x-2 text-[#1F2023] email">
                <span className="min-w-[3rem] font-bold  text">
                    Email:
                </span>
                <span className="truncate value">
                    {email}
                </span>
            </div>
            <div className="flex gap-x-2 text-[#1F2023] birth_date">
                <span className="font-bold  text">
                    Fecha de nacimiento:
                </span>
                <span className="value">
                    {birth_date}
                </span>
            </div>
            <div className="flex gap-x-2 text-[#1F2023] country_of_origin">
                <span className="font-bold  text">
                    Nacionalidad:
                </span>
                <span className=" capitalize value">
                    {country_of_origin}
                </span>
            </div>
        </div>
    )
}

export default CardResponseComponent