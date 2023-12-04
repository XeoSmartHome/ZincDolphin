import styles from "./Banner.module.scss";
import ImageBackground from "../Common/ImageBackground";
import Button from "@mui/material/Button";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <ImageBackground/>
            <div className={styles.content}>
                <div className={styles.title}>
                    High customisable IoT platform
                </div>
                <div className={styles.description}>
                    Monitor and control your home at your fingertips.
                </div>
                <div className={styles.getStated}>
                    <Button variant={"contained"}>
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
