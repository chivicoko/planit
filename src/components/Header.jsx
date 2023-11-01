import styles from "../style.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
    <div className={styles.header}>
        <h3>planIt - Get Your Day Well Set</h3>
        <ul>
            <li><Link to={'/'}>Schedule</Link></li>
            <li><Link to={'/time'}>Set Date</Link></li>
        </ul>
    </div>
    )
}

export default Header;