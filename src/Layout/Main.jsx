import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import NavBar from '../Pages/Sheard/NavBar/NavBar';

const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes("login") || location.pathname.includes("singUP")
    console.log(location.pathname)
    return (
        <div>
           {isLogin ||  <NavBar></NavBar>}
            <Outlet></Outlet>
           {isLogin ||   <Footer></Footer>}
        </div>
    );
};

export default Main;