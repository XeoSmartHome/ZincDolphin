import FeatureCard from "./FeatureCard";
import styles from "./Features.module.scss";
import {Grid} from "@mui/material";

const Features = () => {
    return (
        <div className={styles.features}>
            <Grid container gap={'2rem'} paddingX={'5rem'} justifyContent="center" marginTop={'2rem'}>
                <FeatureCard
                    title={"Performant"}
                    description={"High performant backend"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
                <FeatureCard
                    title={"Customizable"}
                    description={"Customize your smart home to your needs"}
                />
                <FeatureCard
                    title={"Secure"}
                    description={"Secure your home with our platform"}
                />
            </Grid>
        </div>
    );
};

export default Features;
