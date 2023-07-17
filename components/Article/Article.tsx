import React, {FC, ReactNode} from "react";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ArticleProps {
	title: string;
	description: string;
	Image?: ReactNode;
	flipped?: boolean;
}

const Article: FC<ArticleProps> = ({title, description, Image, flipped}) => {
	return (
		<Box sx={{padding: '1rem'}}>
			<Typography variant={"h5"} sx={{paddingBottom: '1rem', display: {sm: 'flex', lg: "none"}}}>
				{title}
			</Typography>
			<Box sx={{display: 'flex', flexDirection: {sm: 'column', md: flipped ? 'row-reverse' : 'row'}, gap: '2rem'}}>
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
					aspectRatio: 16 / 9,
					height: {md: '20rem'}
				}}>{Image}</Box>
				<Box sx={{height: '20rem',display: "flex", flexDirection: "column", justifyContent: "center"}}>
					<Typography variant={"h5"} sx={{paddingBottom: '1rem', display: {sm: 'none', lg: "flex"}}}>
						{title}
					</Typography>
					<Typography variant={"body1"}>
						{description}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Article;
