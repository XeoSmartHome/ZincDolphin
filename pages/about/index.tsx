import React from "react";
import PageHeader from "../../components/Common/PageHeader/PageHeader";
import Article from "../../components/Article/Article";
import Container from "@mui/material/Container";

const description = "XeoSmartHome is a home automation system that allows you to control your home from anywhere in the world. " +
	"The system is based on the Raspberry Pi platform and is designed to be easy to use and easy to install. " +
	"The only thing you need to do is to connect the Raspberry Pi to your home network and install the XeoSmartHome software. " +
	"Once the software is installed, you can control your home from anywhere in the world using your smartphone or tablet. " +
	"You can turn on/off lights, open/close doors, control your heating system, and much more. " +
	"The system is designed to be easy to use and easy to install. ";

const AboutPage = () => {
	return (
		<>
			<PageHeader/>
			<Container>
				<h1>About Page</h1>

				{/*<iframe width="560" height="315" src="https://www.youtube.com/embed/tatahWDD6Vk" title="YouTube video player"/>*/}

				<Article
					title={"XeoSmartHome demo"}
					description={description}
					Image={<iframe style={{height: "100%", width: "100%"}} src="https://www.youtube.com/embed/tatahWDD6Vk" title="YouTube video player"/>}
				/>
				<Article
					title={"XeoSmartHome demo"}
					description={description}
					Image={<iframe style={{height: "100%", width: "100%"}} src="https://www.youtube.com/embed/tatahWDD6Vk" title="YouTube video player"/>}
					flipped
				/>
				<Article
					title={"XeoSmartHome demo"}
					description={description}
					Image={<iframe style={{height: "100%", width: "100%"}} src="https://www.youtube.com/embed/tatahWDD6Vk" title="YouTube video player"/>}
				/>
			</Container>
		</>
	);
};

export default AboutPage;
