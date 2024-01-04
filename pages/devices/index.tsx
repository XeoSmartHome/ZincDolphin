import PageHeader from "../../components/Common/PageHeader/PageHeader";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import DeviceCard from "../../components/Devices/DeviceCard";
import {XEO_DEVICES} from "../../Data/devices";

const DevicesPage = () => {
	return (
		<div>
			<PageHeader/>
			<Box padding={'2rem'}>
				<Typography>
					XeoSmartHome offers a wide range of devices to control your home.
					<br/>
					From smart plugs to smart light bulbs,
					we have everything you need to make your home smart.
				</Typography>
				<Grid container spacing={'1rem'} marginTop={'3rem'}>
					{
						XEO_DEVICES.map((device, index) => {
							return (
								<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
									<DeviceCard device={device}/>
								</Grid>
							);
						})
					}
				</Grid>
			</Box>
		</div>
	);
};

export default DevicesPage;
