import { Link } from "react-router-dom";

interface NotificationPopupProps{
    send:boolean
}
const NotificationPopupComponent = ({ send }:NotificationPopupProps) => (
    <div className={`transition-all duration-300 ease-in-out rounded text-[#1F2023] text-sm w-72 bg-[#EAFF6A] p-5 fixed top-4 ${send ? 'right-4' : '-right-full'} modal__notification`}>
        <span >
            Formulario enviado correctamente 💪
        </span>
        <Link to="/responses">
            Ver respuestas 🔗
        </Link>
    </div>)

export default NotificationPopupComponent 