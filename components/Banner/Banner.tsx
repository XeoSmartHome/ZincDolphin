import styles from "./Banner.module.scss";
import ImageBackground from "../Common/ImageBackground";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <ImageBackground/>
            <div className={styles.content}>
                <div className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut</div>
            </div>
        </div>
    );
};

export default Banner;
