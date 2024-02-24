import './sources.css';
import { SourcesSource } from '../../../types/sources-interfaces';
import { getNotNullElement } from '../news/news';

class Sources {
    public draw(data: SourcesSource[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = getNotNullElement(document.querySelector('#sourceItemTemp'));

        data.forEach((item: SourcesSource) => {
            const sourceClone: Element = sourceItemTemp.content.cloneNode(true) as Element;

            getNotNullElement(sourceClone.querySelector('.source__item-name')).textContent = item.name;
            getNotNullElement(sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getNotNullElement(document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
