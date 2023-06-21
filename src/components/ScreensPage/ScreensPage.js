import './ScreensPage.css'
import Header from '../Header/Header'

export default function ScreensPage() {
    return (
        <div className='screens'>
            <Header />
            <div className='dashboard'>
                <p className='dashboard__text'>
                    Before starting your project, it is essential to create a board to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
                </p>
            </div>
        </div>
    )
}