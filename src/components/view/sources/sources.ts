import './sources.css';
import { SourcesInfo } from '../../../types/sources-interfaces';
import { getNotNullHTMLElement } from '../../../types/HTMLElement-function';

class Sources {
    public draw(data: SourcesInfo[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = getNotNullHTMLElement(document.querySelector('#sourceItemTemp'));

        data.forEach((item: SourcesInfo) => {
            const sourceClone: Element = sourceItemTemp.content.cloneNode(true) as Element;

            getNotNullHTMLElement(sourceClone.querySelector('.source__item-name')).textContent = item.name;
            getNotNullHTMLElement(sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getNotNullHTMLElement(document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
