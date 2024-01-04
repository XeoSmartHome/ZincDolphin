import {GetStaticProps} from "next";
import PageHeader from "../../../components/Common/PageHeader/PageHeader";
import Container from "@mui/material/Container";
import React, {FC} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Breadcrumbs, Link} from "@mui/material";
import {XEO_DEVICES} from "../../../Data/devices";

type Props = {
	device: Device;
}

const DevicePage: FC<Props> = ({device: {name, shortDescription, tags}}) => {
	return (
		<div>
			<PageHeader/>
			<Container>
				<Box marginY={'2rem'}>
					<Breadcrumbs aria-label="breadcrumb">
						<Link href={'/devices'} underline="hover" color="inherit">
							Devices
						</Link>
						<Typography color="textPrimary">{name}</Typography>
					</Breadcrumbs>
				</Box>
				<Box>
					<img src={'https://picsum.photos/500/500'} alt={'device'}/>{/*TODO: replace with real image*/}
				</Box>
				<Typography typography={'p'}>
					{shortDescription}
				</Typography>
				<Box>
					{
						tags?.map((tag) => (
							<Typography key={tag} typography={'p'}>{tag}</Typography>
						))
					}
				</Box>
			</Container>
		</div>
	);
};

export const getStaticPaths: () => {
	paths: { params: { deviceIndex: number; deviceSlug: string } }[];
	fallback: boolean
} = () => {
	return {
		paths: XEO_DEVICES.map((device, index) => ({
			params: {deviceSlug: device.id, deviceIndex: index},
		})),
		fallback: false, // can also be true or 'blocking'
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	return {
		props: {
			device: XEO_DEVICES[(context.params?.deviceIndex as unknown as number) ?? 0],
		},
	};
};

export default DevicePage;
