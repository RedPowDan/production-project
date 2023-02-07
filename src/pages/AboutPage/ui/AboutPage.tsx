import React from 'react';
import { useTheme }                    from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';


const AboutPage = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('AboutPage', {}, [theme])}>
            AboutPage
        </div>
    );
};

export default AboutPage;