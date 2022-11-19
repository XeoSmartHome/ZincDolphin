import styles from '../styles/Home.module.css';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Banner/>
        </div>
    );
};

export default HomePage;
