import Image from "next/image";
import styles from "./ImageBackground.module.scss";

const ImageBackground = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/banner.png"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt={"ok"}
            />
        </div>
    );
};

export default ImageBackground;
