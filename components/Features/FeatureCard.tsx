import {FC} from "react";
import styles from "./FeatureCard.module.scss";

type FeatureCardProps = {
    title: string,
    description: string
}

const FeatureCard: FC<FeatureCardProps> = ({title, description}) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
            </div>
            <div className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
