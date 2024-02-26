import AppLoader from './appLoader';
import { LoaderInfo } from '../../types/loader-interfaces';
import { getNotNullHTMLElement } from '../../types/HTMLElement-function';

class AppController extends AppLoader {
    public getSources({ callback }: Pick<LoaderInfo, 'callback'>) {
        super.getResp({
            endpoint: 'sources',
            callback,
        });
    }

    public getNews(e: Event, { callback }: Pick<LoaderInfo, 'callback'>) {
        let target: HTMLElement = getNotNullHTMLElement(e.target);
        const targetContainer: HTMLElement = getNotNullHTMLElement(e.currentTarget);

        while (target !== targetContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = getNotNullHTMLElement(target.getAttribute('data-source-id'));
                if (targetContainer.getAttribute('data-source') !== sourceId) {
                    targetContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                        callback,
                    });
                }
                return;
            }
            target = getNotNullHTMLElement(target.parentNode);
        }
    }
}

export default AppController;
