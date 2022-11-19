import HeaderButton from "./HeaderButton";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <header className={style.header}>
            <HeaderButton title={"Home"}/>
            <HeaderButton title={"Devices"}/>
            <HeaderButton title={"About"}/>
            <HeaderButton title={"Contact"}/>
        </header>
    );
};

export default Header;
