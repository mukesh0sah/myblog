import articles from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticleListPage=()=>{
    return (
     <ArticleList  articles={articles}></ArticleList>
    )
}

export default ArticleListPage;