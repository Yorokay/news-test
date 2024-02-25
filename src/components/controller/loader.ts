import { LoaderInfo } from '../../types/loader-interfaces';
import { UrlOptionsInfo } from '../../types/loader-interfaces';

enum StatusCodes {
    Code401 = 401,
    Code404 = 404,
}

class Loader {
    private _baseLink: string;
    private _options: { apiKey: string };

    constructor(baseLink: string, options: { apiKey: string }) {
        this._baseLink = baseLink;
        this._options = options;
    }

    protected getResp({
        endpoint,
        options = {},
        callback = () => {
            console.error('No callback for GET response');
        },
    }: Pick<LoaderInfo, 'endpoint' | 'options' | 'callback'>): void {
        this.load({ method: 'GET', endpoint, callback, options });
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === StatusCodes.Code401 || res.status === StatusCodes.Code404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl({ options, endpoint }: Pick<LoaderInfo, 'options' | 'endpoint'>): string {
        const urlOptions: UrlOptionsInfo = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load({ method, endpoint, callback, options = {} }: LoaderInfo): void {
        fetch(this.makeUrl({ options, endpoint }), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
