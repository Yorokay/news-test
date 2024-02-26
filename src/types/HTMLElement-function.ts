type HTMLElementFunction = <T extends Element | null | EventTarget | string>(news: T) => NonNullable<T> & HTMLElement;

export const getNotNullHTMLElement: HTMLElementFunction = <T extends Element | null | EventTarget | string>(
    news: T
) => {
    if (news === null) {
        throw new Error('No news found');
    }
    return news as NonNullable<T> & HTMLElement;
};
