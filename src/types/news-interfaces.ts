interface NewsSource {
    id: null | string;
    name: string;
}

export interface NewsArticle {
    source: NewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: NewsArticle[];
}
