import CrawlerService from '../../crawler/services/itemsCrawler.service';
import DataHandlerService from './dataHandler.service';
import ApiService from '../../api/api.service';

class ItemsService {
    constructor(params) {
        this.crawlerService = new CrawlerService(params);
        this.dataHandlerService = new DataHandlerService();
        this.apiService = new ApiService();
    }

    getItem(identifier, server) {
        return new Promise((resolve, reject) => {
            this.crawlerService.getSingleItemData(identifier, server)
                .then(item => {
                    return resolve(this.dataHandlerService.convertEquipments(item));
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }

    getStores(itemId, nameId, mode, server, type) {
        return this.apiService.getStores(itemId, nameId, mode, server, type);
    }
}

export default ItemsService;
