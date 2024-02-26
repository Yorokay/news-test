// import { NewsResponse } from './news-interfaces';
// import { SourcesResponse } from './sources-interfaces';

export interface LoaderInfo {
    endpoint: string;
    options?: Record<string, never> | { sources: string };
    method?: string;
    callback<T>(data?: T): void;
}

export interface UrlOptionsInfo {
    [index: string]: string | undefined;
    sources?: string;
    apiKey?: string;
}
