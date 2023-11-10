import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "../../styles/utils.module.css";
import Head from 'next/head'


//パスを取得する。
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, //不明なパスを入力した際に404画面を表示
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({postData}) {
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <articl>
            <h1 className={utilStyles.headingX1}>{postData.title}</h1>
            <div className={utilStyles.lightText}>{postData.date}</div>
            <div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}} />
        </articl>
    </Layout>
    );
}