import React from 'react';
import {Link} from "react-router-dom";
import styles from './style/HeaderComponent.Module.css'


const HeaderComponent = () => {
    return (
        <div>

            <ul className={styles.menu}>
                <li><Link to={''}>Home page</Link></li>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'comments'}>comments page</Link></li>
                <li><Link to={'total'}>total page</Link></li>
            </ul>
            <hr/>


        </div>
    );
};

export default HeaderComponent;