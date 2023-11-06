import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout';
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです</p>
      </section>

      <section>
        <h2>エンジニアのブログ</h2>
        <div>
          <article>
            <Link legacyBehavior href="/">
              <img src='/images/thumbnail01.jpg' alt=""/>
            </Link>
            <Link legacyBehavior href="/">
            <a>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}

