
import {Link} from 'react-router-dom';
const ArticleList = ({articles}) => {
    return (
        <>
        <h1 >Articles</h1>
         {articles.map(article =>(
           <>
          <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`} >
               <h4>{article.title.toUpperCase()}</h4>
           </Link>
               <p>{article.content[0].substring(0,200)}....</p>
          
           </>
         ))}
       </>
    );
}


export default ArticleList;