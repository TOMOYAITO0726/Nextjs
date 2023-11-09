import path from "path"; //ディレクトリを取得
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts"); //postsフォルダのパス取得

//mdファイルのデータを取り出す

export function getPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);//配列としてファイルが代入される
    const allPostsData = fileNames.map((fileName)=> { //ファイル名を一つ一つ取り出す
        const id = fileName.replace(/\.md$/); //mdを取り除いたファイル名を取り出す
        //idはファイル名（URLが動的に変化する際に使う）
        
        //マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName); //各ファイルのパス
        const fileContents =fs.readFileSync(fullPath, "utf8"); //各ファイルの中身、文字列として読み取る
        //メタデータを読み取る
        const matterResult = matter(fileContents);//title,data,thumbnai

        //idとデータを返す
        return{
            id,
            ...matterResult.data,//allPostDataに返す戻り値
        };
    });
    return allPostsData;//getPostsData()に返す戻り値
}
//getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory); //ファイル名が入っている
    return fileNames.map((fileName) => {
        return {
        params: {
            id: fileName.replace(/\.md$/),
        },
    };
    });
}

//idに基づいてブログ投稿データを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, '${id}.md'); //各ファイルのパス
    const fileContent = fs.readFileSync(fullPath, "utf-8"); //ファイルの中身を読み込む

    const matterResult = matter(fileContent); //メタデータを解析

    const blogContent = await remark() //html形式で出力するために使用
    .use(html)
    .process(matterResult.content);
    
    const blogContentHTML = blogContent.toString();

    return {
        id, //idに対応したblogContentとメタデータを返すことができる
        blogContentHTML,
        ...matterResult.data,
    };
}