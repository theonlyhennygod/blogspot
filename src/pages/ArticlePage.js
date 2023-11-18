import articles from "./article-content";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {

    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId)

    // if not found, return 404
    if (!article) {
        return <NotFoundPage />
    }

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