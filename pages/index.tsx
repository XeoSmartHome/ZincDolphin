import styles from '../styles/Home.module.css';
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import DeviceArticle from "../components/Devices/DeviceArticle";
import PageHeader from "../components/Common/PageHeader/PageHeader";
import Head from "next/head";
import {Meta} from "next/dist/lib/metadata/generate/meta";

const HomePage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>XeoSmartHome</title>
				<Meta content={"height=device-height, width=device-width, initial-scale=1.0"} name={"viewport"}/>
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
