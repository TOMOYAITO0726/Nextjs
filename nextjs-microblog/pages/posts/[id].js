import Layout from "@/components/Layout";
import { getAllPostIds } from "@/lib/post";

//パスを取得する。
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, //不明なパスを入力した際に404画面を表示
    }
}

export function getStaticProps({ params}) {
    
}

export default function Post() {
    return <Layout>動的ルーティング</Layout>;
}