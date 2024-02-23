import './news.css';
import { NewsArticle } from '../../../types/news-interfaces';

function processNullElement<T extends Element | null>(news: T): NonNullable<T> & HTMLElement {
    if (news === null || !(news instanceof HTMLElement)) {
        throw new Error('No news found');
    }
    return news;
}

class News {
    draw(data: NewsArticle[]) {
        console.log(data);
        const news: NewsArticle[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsArticle, idx: number) => {
            const newsClone: Node = processNullElement(newsItemTemp).content.cloneNode(true);
            if (!(newsClone instanceof Element)) {
                throw new Error('no');
            }

            if (idx % 2) processNullElement(newsClone.querySelector('.news-item')).classList.add('alt');

            processNullElement(newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            processNullElement(newsClone.querySelector('.news__meta-author')).textContent =
                item.author || item.source.name;
            processNullElement(newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            processNullElement(newsClone.querySelector('.news__description-title')).textContent = item.title;
            processNullElement(newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            processNullElement(newsClone.querySelector('.news__description-content')).textContent = item.description;
            processNullElement(newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        processNullElement(document.querySelector('.news')).innerHTML = '';
        processNullElement(document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
