import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import { useParams } from "react-router-dom";

const ArticlePage = () => {

    // TODO: we can see the data, we just need it to display the article when clicked, it has to be something with grabbing the content and displaying it when the article is clicked. I will work on this later
    const { articleId } = useParams();
    console.log(articleId)
    console.log(articles[0])
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