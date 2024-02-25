import News from './news/news';
import Sources from './sources/sources';
import { NewsArticle, NewsResponse } from '../../types/news-interfaces';
import { SourcesResponse, SourcesInfo } from '../../types/sources-interfaces';

export class AppView {
    private _news: Readonly<News>;
    private _sources: Readonly<Sources>;

    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    public drawNews(data: NewsResponse): void {
        const values: NewsArticle[] = data?.articles ? data?.articles : [];
        this._news.draw(values);
    }

    public drawSources(data: SourcesResponse): void {
        const values: SourcesInfo[] = data?.sources ? data?.sources : [];
        this._sources.draw(values);
    }
}

export default AppView;
