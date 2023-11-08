import path from "path"; //ディレクトリを取得
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts"); //postsフォルダのパス取得

//mdファイルのデータを取り出す

export function getPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);//配列としてファイルが代入される
    const allPostData = fileNames.map((fileName)=> { //ファイル名を一つ一つ取り出す
        const id = fileName.replace(/\.md$/); //mdを取り除いたファイル名を取り出す
        //idはファイル名（URLが動的に変化する際に使う）
        
        //マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory. fileName); //各ファイルのパス
        const fileContents =fs.readFileSync(fullPath, "utf8"); //各ファイルの中身、文字列として読み取る
        //メタデータを読み取る
        const matterResult = matter(fileContents);//title,data,thumbnai

        //idとデータを返す
        return{
            id,
            ...matterResult,
        };
    });
}