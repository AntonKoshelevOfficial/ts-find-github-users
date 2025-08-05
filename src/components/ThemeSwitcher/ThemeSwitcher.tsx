import {useEffect, useState} from 'react';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const modeText = isDarkMode ? 'Light' : 'Dark';
    const ModeIcon = isDarkMode ? SunIcon : MoonIcon;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [ isDarkMode ]);

    return (
        <div className={styles.switcher} onClick={() => setIsDarkMode(!isDarkMode)}>
            <span>{modeText}</span>
            <ModeIcon className={styles.icon}/>
        </div>
    );
};