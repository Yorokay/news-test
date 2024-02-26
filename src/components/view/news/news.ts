import './news.css';
import { NewsArticle } from '../../../types/news-interfaces';

export function getNotNullElement<T extends Element | null | EventTarget | string | Document>(
    news: T
): NonNullable<T> & HTMLElement {
    if (news === null) {
        throw new Error('No news found');
    }
    return news as NonNullable<T> & HTMLElement;
}

class News {
    public draw(data: NewsArticle[]): void {
        const news: NewsArticle[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = getNotNullElement(document.querySelector('#newsItemTemp'));

        news.forEach((item: NewsArticle, idx: number) => {
            const newsClone: Element = newsItemTemp.content.cloneNode(true) as Element;

            if (idx % 2) getNotNullElement(newsClone.querySelector('.news__item')).classList.add('alt');

            getNotNullElement(newsClone.querySelector('.news__meta-photo')).style.backgroundImage =
                `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            getNotNullElement(newsClone.querySelector('.news__meta-author')).textContent =
                item.author || item.source.name;
            getNotNullElement(newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getNotNullElement(newsClone.querySelector('.news__description-title')).textContent = item.title;
            getNotNullElement(newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            getNotNullElement(newsClone.querySelector('.news__description-content')).textContent = item.description;
            getNotNullElement(newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        getNotNullElement(document.querySelector('.news')).innerHTML = '';
        getNotNullElement(document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
