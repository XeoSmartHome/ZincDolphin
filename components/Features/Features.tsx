import FeatureCard from "./FeatureCard";
import styles from "./Features.module.scss";

const Features = () => {
    return (
        <div className={styles.features}>
            <div className={styles.features__container}>
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
            </div>
        </div>
    )
}

export default Features;
