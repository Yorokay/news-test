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

enum Statuses {
    Ok = 'ok',
    Error = 'error',
}

export interface NewsResponse {
    status: Statuses.Ok & Statuses.Error;
    totalResults: number;
    articles: NewsArticle[];
}
