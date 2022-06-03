import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';

const HomePage = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className='homeContainer'>
            <Navbar />
             container

            </div>
        </div>
    )
}

export default HomePage