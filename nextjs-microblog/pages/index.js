import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout';
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from '../lib/post'

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();//id, title, date, thumbnail
  console.log(allPostsData);

  //Home()にallPostDataを渡してあげる
  return {
    props: {
      allPostsData,
    },
  };
}
 //SSRの場合
//  export async function getServerSideProps(context) { //contextにはユーザーがリクエストした情報が入る
//   return {
//     props: {
//       //Homeコンポーネントに渡すprops
//     }
//   }
// }
export default function Home(props) {
  const {allPostsData} = props;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです</p>
      </section>

      <section className={'${utilStyle.headingMd} ${utilStyle.padding1px}'}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
            <Link legacyBehavior href={`/posts/${id}`}>
              <img src={thumbnail} className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href={`/posts/${id}`}>
            <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{date}</small>
          </article>
          ))}
          
        </div>
      </section>
    </Layout>
  );
}

