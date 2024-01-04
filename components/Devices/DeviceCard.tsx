import {Card, CardActions, CardContent, CardMedia, Link} from "@mui/material";
import {FC} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface DeviceCardProps {
	device: Device;
}

const DeviceCard: FC<DeviceCardProps> = ({device: {name, shortDescription}}) => {
	return (
		<Card>
			<CardMedia
				sx={{height: '12rem'}}
				image={'https://www.epa.gov/sites/default/files/2018-07/ws-learnmore-summer-current-2018-rachio-outdoor-enclosure-gen2.jpg'}
				title={name}/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography
					sx={{
						display: '-webkit-box',
						overflow: 'hidden',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: 3,
					}}
					variant="body2"
					color="text.secondary">
					{shortDescription}
				</Typography>
			</CardContent>
			<CardActions>
				<Link>
					<Button color="primary">
						Read More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default DeviceCard;
