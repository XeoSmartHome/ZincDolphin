import styles from '../styles/Home.module.css';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import DeviceArticle from "../components/Devices/DeviceArticle";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Banner/>
            <Features/>
            <DeviceArticle imagePosition={"right"}/>
            <DeviceArticle imagePosition={"left"}/>
        </div>
    );
};

export default HomePage;
