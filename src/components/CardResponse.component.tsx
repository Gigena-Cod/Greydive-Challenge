import Response from "../interfaces/response.interface"

const CardResponseComponent = ({ full_name, email, birth_date, country_of_origin }: Response) => {
    return (
        <div className="transition-all duration-300 select-none ease-in-out shadow  hover:shadow-white p-4 rounded border card">

            <div className="flex gap-x-2 text-white name__full">
                <span className="font-bold text">
                    Nombre completo:
                </span>
                <span className="value">
                    {full_name}
                </span>
            </div>
            <div className="flex gap-x-2 text-white email">
                <span className="font-bold  text">
                    Email:
                </span>
                <span className="value">
                    {email}
                </span>
            </div>
            <div className="flex gap-x-2 text-white birth_date">
                <span className="font-bold  text">
                    Fecha de nacimiento:
                </span>
                <span className="value">
                    {birth_date}
                </span>
            </div>
            <div className="flex gap-x-2 text-white country_of_origin">
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