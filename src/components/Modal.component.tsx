import { Link } from "react-router-dom";

interface NotificationPopupProps{
    show:boolean,
    cssClass:string
}
const NotificationPopupComponent = ({ show,cssClass }:NotificationPopupProps) => (
    <div className={`transition-all duration-300 ease-in-out rounded text-sm w-72 ${cssClass} p-5 fixed top-4 ${show ? 'right-4' : '-right-full'} modal__notification`}>
        <span >
            Formulario enviado correctamente 💪
        </span>
        <Link to="/responses">
            Ver respuestas 🔗
        </Link>
    </div>)

export default NotificationPopupComponent 