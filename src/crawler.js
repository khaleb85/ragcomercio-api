import Nightmare from 'nightmare';
import QuerySelectors from '../config/querySelector';

class Crawler {
    constructor(params) {
        let nightmareParams = {
            show: true
        };

        if (params) { nightmareParams = params; }

        this._nightmare = new Nightmare(nightmareParams);
    }

    getItem(id) {
        const nameSelector = QuerySelectors.TableColumns.Name;
        const qntSelector = QuerySelectors.TableColumns.Quantity;
        const minPriceSelector = QuerySelectors.TableColumns.MinPrice;
        const avgPriceSelector = QuerySelectors.TableColumns.AvgPrice;
        const maxPriceSelector = QuerySelectors.TableColumns.MaxPrice;

        this._nightmare.goto(`${QuerySelectors.BaseUrl}/search/2/${id}`)
            .evaluate((selector, name, qnt, minPriceSelector, avgPriceSelector, maxPriceSelector) => 
                Array.from(document.querySelectorAll(selector))
                    .map(element => {
                        let minPrice = element.querySelector(minPriceSelector);
                        let avgPrice = element.querySelector(avgPriceSelector);
                        let maxPrice = element.querySelector(maxPriceSelector);
                        let isChat = false;

                        if (minPrice && avgPrice && maxPrice) {
                            minPrice = minPrice.innerText.trim();
                            avgPrice = avgPrice.innerText.trim();
                            maxPrice = maxPrice.innerText.trim();
                            isChat = true;
                        }

                        return {
                            Name: element.querySelector(name).innerText.trim(),
                            quantity: parseInt(element.querySelector(qnt).innerHTML.trim()),
                            MinPrice: minPrice,
                            AvgPrice: avgPrice,
                            MaxPrice: maxPrice,
                            isChat,
                        };
                    }), `${QuerySelectors.OfflineTable} > tbody > tr`, nameSelector, qntSelector, minPriceSelector, avgPriceSelector, maxPriceSelector)
            .end()
            .then(elements => {
                
                console.log(elements);
                }).catch(error => {
                console.error('Search failed:', error)
            });
    }
}

export default Crawler;