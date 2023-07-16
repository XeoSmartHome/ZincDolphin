import styles from '../styles/Home.module.css';
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import DeviceArticle from "../components/Devices/DeviceArticle";
import PageHeader from "../components/Common/PageHeader/PageHeader";
import Head from "next/head";

const HomePage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>XeoSmartHome</title>
			</Head>
			<PageHeader/>
			<Banner/>
			<Features/>
			<DeviceArticle imagePosition={"right"}/>
			<DeviceArticle imagePosition={"left"}/>
		</div>
	);
};

export default HomePage;
