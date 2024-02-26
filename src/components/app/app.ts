import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { getNotNullHTMLElement } from '../../types/HTMLElement-function';

class App {
    private _controller: Readonly<AppController>;
    private _view: Readonly<AppView>;

    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    public start() {
        getNotNullHTMLElement(document.querySelector('.sources')).addEventListener('click', (e: Event) =>
            this._controller.getNews(e, { callback: (data) => this._view.drawNews(data) })
        );
        this._controller.getSources({ callback: (data) => this._view.drawSources(data) });
    }
}

export default App;
