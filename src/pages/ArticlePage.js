import articles from "./article-content";
import { useParams } from "react-router-dom";

const ArticlePage = () => {

    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId)

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, i) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </>
    );
}


export default ArticlePage;