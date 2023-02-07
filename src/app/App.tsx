import { Link }       from 'react-router-dom';
import './styles/index.scss';
import { useTheme }   from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter }  from 'app/providers/router';
import { Navbar }     from 'widgest/Navbar';

const App = () => {
    const {theme, changeTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={changeTheme}> Поменять тему</button>
            <AppRouter />
        </div>
    );
};

export default App;