import Nightmare from 'nightmare';
import path from 'path';
import QuerySelectors from '../config/querySelector';

class Crawler {
    constructor(params) {
        let nightmareParams = {
            show: true
        };

        if (params) {
            nightmareParams = params;
        }

        this._nightmare = new Nightmare(nightmareParams);
    }

    getItem(id) {
        return this._nightmare
            .goto(`${QuerySelectors.BaseUrl}/search/2/${id}`)
            .inject('js', path.join(__dirname,'injects/single-item.inject.js'))
            .evaluate((querySelector) => {
                return {
                    online: getTableItems(querySelector.OnlineTable),
                    offline: getTableItems(querySelector.OfflineTable),
                }
            }, QuerySelectors)
            .end();
    };
}

export default Crawler;