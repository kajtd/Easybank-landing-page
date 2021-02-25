import React from 'react';
import styles from './LatestArticles.module.scss';
import { latestArticlesList } from '../../data/latestArticlesList';
import Bounce from 'react-reveal/Bounce';

const LatestArticles = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Latest Articles
            </h2>
            <ul className={styles.articles}>
                {latestArticlesList.map(article => (
                    <Bounce left key={article.title}>
                        <li className={styles.article}>
                            <img className={styles["article-image"]} src={article.image} alt="article image" />
                            <div className={styles["article-info"]}>
                                <p className={styles["article-author"]}>By {article.author}</p>
                                <h3 className={styles["article-title"]}>{article.title}</h3>
                                <p className={styles["article-description"]}>{article.description}</p>
                            </div>
                        </li>
                    </Bounce>
                ))}
            </ul>
        </div>
    );
};

export default LatestArticles;
