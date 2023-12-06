import styles from "./Banner.module.scss";
import ImageBackground from "../Common/ImageBackground";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Banner = () => {
	return (
		<div className={styles.banner}>
			<ImageBackground/>
			<div className={styles.content}>
				<Typography marginBottom={'1rem'} fontWeight={'bold'} fontSize={'1.8rem'}>
					High customisable IoT platform
				</Typography>
				<Typography fontSize={'1.2rem'}>
					Revolutionize your connected living – our customizable IoT platform lets you fine-tune your smart
					home, offering personalized control over devices for a truly tailored and effortless lifestyle.
				</Typography>
				<Box marginTop={'2rem'}>
					<Button variant={"contained"}>
						Get Started
					</Button>
				</Box>
			</div>
		</div>
	);
};

export default Banner;
