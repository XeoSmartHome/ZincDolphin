import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";

const DevicePage = () => {
    const router = useRouter();
    const {deviceSlug} = router.query;

    return (
        <div>
            <h1>Device {deviceSlug}</h1>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [{params: {deviceSlug: '1'}}, {params: {deviceSlug: '2'}}],
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};

export default DevicePage;
