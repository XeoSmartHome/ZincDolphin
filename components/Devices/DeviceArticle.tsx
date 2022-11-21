import {FC} from "react";
import styles from "./DeviceArticle.module.scss";

type DeviceArticleProps = {
    imagePosition: 'left' | 'right';
}

const DeviceArticle: FC<DeviceArticleProps> = ({imagePosition}) => {
    return (
        <div className={styles.deviceArticle}>
            <div className={styles.imageContainer}>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Device</h1>
            </div>
        </div>
    )
}

export default DeviceArticle;
