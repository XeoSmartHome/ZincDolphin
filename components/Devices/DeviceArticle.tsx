import {FC} from "react";
import styles from "./DeviceArticle.module.scss";
import ImageBackground from "../Common/ImageBackground";

type DeviceArticleProps = {
    imagePosition: 'left' | 'right';
}

const DeviceArticle: FC<DeviceArticleProps> = ({imagePosition}) => {
    return (
        <div className={`${styles.deviceArticle} ${imagePosition === "right" && styles.horizontalReverse}`}>
            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    <ImageBackground/>
                </div>
            </div>
            <div className={styles.textContainer}>
                <span className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    nunc non nunc aliquet, nec lacinia nisl aliquam. Sed euismod nunc non nunc aliquet, nec lacinia nisl
                    aliquam.</span>
            </div>
        </div>
    );
};

export default DeviceArticle;
