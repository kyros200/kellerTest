import {Outlet} from 'react-router-dom'
import './PageLayout.scss'

const PageLayout = () => {
    return (
        <div className='layoutContainer'>
            <div className='layoutContent'>
                <Outlet />
            </div>
        </div>
    )

}

export default PageLayout;