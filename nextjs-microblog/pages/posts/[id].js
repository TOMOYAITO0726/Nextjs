import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";

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
        {postData.title}
        <br />
        {postData.date}
        <br />
        {postData.blogContentHTML}
    </Layout>
    );
}