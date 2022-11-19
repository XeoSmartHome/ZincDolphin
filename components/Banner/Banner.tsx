import Image from "next/image";
import styles from "./Banner.module.scss";
import ImageBackground from "../Common/ImageBackground";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <ImageBackground/>
        </div>
    );
}

export default Banner;
