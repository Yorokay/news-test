import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { getNotNullElement } from '../view/news/news';

class App {
    private _controller: Readonly<AppController>;
    private _view: Readonly<AppView>;

    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    start() {
        getNotNullElement(document.querySelector('.sources')).addEventListener('click', (e: Event) =>
            this._controller.getNews(e, { callback: (data) => this._view.drawNews(data) })
        );
        this._controller.getSources({ callback: (data) => this._view.drawSources(data) });
    }
}

export default App;
