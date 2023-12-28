import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";
import PageHeader from "../../../components/Common/PageHeader/PageHeader";
import Container from "@mui/material/Container";
import {FC} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Breadcrumbs, Link} from "@mui/material";

type Props = {
    name: string;
    shortDescription: string;
    tags?: string[];
}

const DevicePage: FC<Props> = ({name, shortDescription, tags}) => {
    const router = useRouter();

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

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [{params: {deviceSlug: '1'}}, {params: {deviceSlug: '2'}}],
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    return {
        props: {
            name: 'Irrigation Controller',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ' +
                'volutpat commodo, quam purus rhoncus nisl, sed lacinia libero odio ac nunc. Nulla facilisi. ' +
                'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ' +
                'Suspendisse potenti. Donec sed diam ligula. Nulla facilisi. Donec auctor, justo vitae ' +
                'vestibulum tincidunt, sem nunc aliquam magna, eget hendrerit risus massa vitae nisl. ',
            tags: ['irrigation', 'controller', 'garden'],
        },
    };
};

export default DevicePage;
