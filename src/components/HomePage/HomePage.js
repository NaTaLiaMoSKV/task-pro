import Header from '../Header/Header'
import ScreensPage from '../ScreensPage/ScreensPage'
import Sidebar from '../Sidebar/Sidebar'
import './HomePage.css'

export default function HomePage() {
    return (
        <div id="home-page">
            <Sidebar />
            <ScreensPage />
        </div>
    )
}