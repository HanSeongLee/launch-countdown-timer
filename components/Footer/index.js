import React from "react";
import styles from './style.module.scss';
import SocialContainer from "../../containers/SocialContainer";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialContainer}>
                <SocialContainer />
            </ul>
        </footer>
    );
};

export default Footer;
