import CrawlerService from '../../crawler/services/itemsCrawler.service';
import DataHandlerService from './dataHandler.service';

class ItemsService {
    constructor(params) {
        this.crawlerService = new CrawlerService(params);
        this.dataHandlerService = new DataHandlerService();
    }

    getItem(identifier) {
        return new Promise((resolve, reject) => {
            this.crawlerService.getSingleItemData(identifier)
                .then(item => {
                    return resolve(this.dataHandlerService.convertEquipments(item));
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
}

export default ItemsService;
