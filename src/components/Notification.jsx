import "./Notification.css"

const Notification = ({message}) => {
    return(
        <div>
            <p className="notification__font-size">{message}</p>
        </div>
    )
}

export default Notification;