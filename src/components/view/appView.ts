import News from './news/news';
import Sources from './sources/sources';
import { NewsResponse } from '../../types/news-interfaces';
import { SourcesResponse } from '../../types/sources-interfaces';

export class AppView {
    private _news: News;
    private _sources: Sources;

    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    public drawNews(data: NewsResponse) {
        const values = data?.articles ? data?.articles : [];
        this._news.draw(values);
    }

    public drawSources(data: SourcesResponse) {
        const values = data?.sources ? data?.sources : [];
        this._sources.draw(values);
    }
}

export default AppView;
