import userImage from '../../images/user-photo.png'
import arrowDownImage from '../../images/arrow-down.png'
import './Header.css'

export default function Header() {
    return (
        <header>
            <p className='theme__text'>Theme</p>
            <img alt='Choose a theme' className='theme__icon' src={arrowDownImage} />

            <p className='user-info__name'>Ivetta</p>
            <img alt='User photo' className='user-info__image' src={userImage} />
        </header>
    )
}