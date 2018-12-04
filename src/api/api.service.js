import request from 'request';
import ApiParams from '../../config/apiParams.config';

class ApiService {
    getStores(itemId, nameId, mode, server, type) {
        return this._getStoresHtml(itemId, nameId, mode, server, type);
    }

    _getStoresHtml(itemId, nameId, mode, server, type) {
        return new Promise(resolve => {
            const url = `${ApiParams.baseUrl}/items.php?item=${itemId}&server=${server}&mode=${mode}&nameid=${nameId}&type=${type}`;
            request(url, {}, (err, res, body) => {
                if (err) { throw err; }

                return resolve(body);
            });
        });
    }
}

export default ApiService;
