import {FC, ReactNode} from "react";
import styles from './HeaderButton.module.scss';

type HeaderButtonProps = {
    title: ReactNode;
}

const HeaderButton: FC<HeaderButtonProps> = ({title}) => {
    return (
        <div className={styles.headerButton}>
            {title}
        </div>
    );
};

export default HeaderButton;
