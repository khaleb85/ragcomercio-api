/* eslint no-undef: 0 */
import Nightmare from 'nightmare';
import path from 'path';
import QuerySelectors from '../../../config/querySelector.config';
import NightmareConfig from '../../../config/nightmare.config';

class ItemsCrawlerService {
    constructor(params) {
        let nightmareParams = NightmareConfig;

        if (params) {
            nightmareParams = params;
        }

        this._nightmare = new Nightmare(nightmareParams);
    }

    getSingleItemData(id) {
        return this._nightmare
            .goto(`${QuerySelectors.BaseUrl}/search/2/${id}`)
            .inject('js', path.join(__dirname, '../injects/single-item.inject.js'))
            .evaluate((querySelector) => {
                return {
                    online: getTableItems(querySelector, querySelector.OnlineTable),
                    offline: getTableItems(querySelector, querySelector.OfflineTable),
                };
            }, QuerySelectors)
            .end();
    }
}

export default ItemsCrawlerService;
