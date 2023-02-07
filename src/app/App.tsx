import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme }            from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter }  from 'app/providers/router';

const App = () => {
    const {theme, changeTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О сайте </Link>
            <button onClick={changeTheme}> Поменять тему</button>
            <AppRouter />
        </div>
    );
};

export default App;