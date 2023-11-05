import Head from "next/head";
import { Children } from "react";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout({Children}) {
    return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header>
            <img src="/images/profile.png" />
            <h1>{name}</h1>
        </header>
        <main>{Children}</main>
    </div>
    );
}

export default Layout;