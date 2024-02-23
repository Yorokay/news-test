interface HeadlinesSource {
    id: null | string;
    name: string;
}

interface HeadlinesArticle {
    source: HeadlinesSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface HeadlinesResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: HeadlinesArticle[];
}
