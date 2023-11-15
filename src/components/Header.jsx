import styles from "../style.module.css";
import {Link} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    return (
    <div className={styles.header}>
        <ToastContainer />
        <h3>planIt - Get Your Day Well Set</h3>
        <ul>
            <li><Link to={'/'}>Events</Link></li>
            <li><Link to={'/time'}>Set Date</Link></li>
        </ul>
    </div>
    )
}

export default Header;