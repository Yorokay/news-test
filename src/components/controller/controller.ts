import AppLoader from './appLoader';
import { LoaderInfo } from '../../types/loader-interfaces';
import { getNotNullElement } from '../view/news/news';

class AppController extends AppLoader {
    getSources({ callback }: Pick<LoaderInfo, 'callback'>) {
        super.getResp({
            endpoint: 'sources',
            callback,
        });
    }

    getTarget(e: Event, { callback }: Pick<LoaderInfo, 'callback'>) {
        let target: HTMLElement = getNotNullElement(e.target);
        const targetContainer: HTMLElement = getNotNullElement(e.currentTarget);

        while (target !== targetContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = getNotNullElement(target.getAttribute('data-source-id'));
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
            target = getNotNullElement(target.parentNode);
        }
    }
}

export default AppController;
