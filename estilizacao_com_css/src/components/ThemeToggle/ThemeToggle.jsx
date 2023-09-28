import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');
    const body = document.body;

    useEffect(() => {
        body.classList = theme === 'light' ? styles.ligth_theme : styles.dark_theme;
    }, [theme, body])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={toggleTheme} className={styles.my_button}>Alterar tema</button>
    );
};

export default ThemeToggle;