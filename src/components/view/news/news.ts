import './news.css';
import { NewsArticle } from '../../../types/news-interfaces';
import { getNotNullHTMLElement } from '../../../types/HTMLElement-function';

// export function getNotNullElement<T extends Element | null | EventTarget | string>(
//     news: T
// ): NonNullable<T> & HTMLElement {
//     if (news === null) {
//         throw new Error('No news found');
//     }
//     return news as NonNullable<T> & HTMLElement;
// }

class News {
    public draw(data: NewsArticle[]): void {
        const news: NewsArticle[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = getNotNullHTMLElement(document.querySelector('#newsItemTemp'));

        news.forEach((item: NewsArticle, idx: number) => {
            const newsClone: Element = newsItemTemp.content.cloneNode(true) as Element;

            if (idx % 2) getNotNullHTMLElement(newsClone.querySelector('.news__item')).classList.add('alt');

            getNotNullHTMLElement(newsClone.querySelector('.news__meta-photo')).style.backgroundImage =
                `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            getNotNullHTMLElement(newsClone.querySelector('.news__meta-author')).textContent =
                item.author || item.source.name;
            getNotNullHTMLElement(newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getNotNullHTMLElement(newsClone.querySelector('.news__description-title')).textContent = item.title;
            getNotNullHTMLElement(newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            getNotNullHTMLElement(newsClone.querySelector('.news__description-content')).textContent = item.description;
            getNotNullHTMLElement(newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        getNotNullHTMLElement(document.querySelector('.news')).innerHTML = '';
        getNotNullHTMLElement(document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
