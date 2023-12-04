import FeatureCard from "./FeatureCard";
import styles from "./Features.module.scss";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

const Features = () => {
    return (
        <div className={styles.features}>
            <Grid container gap={'4rem'} paddingX={'10rem'} justifyContent="center">
                <FeatureCard
                    title={"Performant"}
                    description={"High performant backend"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
                <FeatureCard
                    title={"Cross platform"}
                    description={"Support for all platforms: Android IOS and desktop"}
                />
            </Grid>
        </div>
    );
};

export default Features;
