import {FC} from "react";
import styles from "./FeatureCard.module.scss";
import {Grid, Paper} from "@mui/material";

type FeatureCardProps = {
    title: string,
    description: string
}

const FeatureCard: FC<FeatureCardProps> = ({title, description}) => {
    return (
        <Grid item>
            <Paper sx={{height: '18rem', width: '15rem', padding: '1rem'}}>
                <div className={styles.icon}>
                    <img src="/logo/xeo_vectorial_logo_white.svg" alt="feature" className={styles.iconImage}/>
                </div>
                <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </Paper>
        </Grid>
    );
};

export default FeatureCard;
