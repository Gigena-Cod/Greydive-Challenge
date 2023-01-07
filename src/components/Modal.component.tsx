import { Link } from "react-router-dom";

interface NotificationPopupProps{
    send:boolean
}
const NotificationPopupComponent = ({ send }:NotificationPopupProps) => (
    <div className={`transition-all duration-300 ease-in-out rounded text-gray-100 text-sm w-72 bg-green-600 p-5 fixed top-4 ${send ? 'right-4' : '-right-full'} modal__notification`}>
        <span >
            Formulario enviado correctamente 💪
        </span>
        <Link to="/responses">
            Ver respuestas 🔗
        </Link>
    </div>)

export default NotificationPopupComponent 