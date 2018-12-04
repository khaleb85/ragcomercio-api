/* eslint no-unused-vars: 0 no-undef: 0 */

window.getTableItems = function getTableItems(querySelector, tableSelector) {
    return Array.from(document.querySelectorAll(`${tableSelector} > tbody > tr`))
        .map(element => {
            let minPrice = element.querySelector(querySelector.TableColumns.MinPrice);
            let avgPrice = element.querySelector(querySelector.TableColumns.AvgPrice);
            let maxPrice = element.querySelector(querySelector.TableColumns.MaxPrice);
            let isChat = true;

            if (minPrice && avgPrice && maxPrice) {
                minPrice = minPrice.innerText.trim();
                avgPrice = avgPrice.innerText.trim();
                maxPrice = maxPrice.innerText.trim();
                isChat = false;
            } else {
                minPrice = null;
                avgPrice = null;
                maxPrice = null;
            }

            return {
                Id: {
                    item: element.querySelector(querySelector.TableColumns.Name).getAttribute('item'),
                    nameId: element.querySelector(querySelector.TableColumns.Name).getAttribute('nameid'),
                },
                Name: element.querySelector(querySelector.TableColumns.Name).innerText.trim(),
                Quantity: parseInt(element.querySelector(querySelector.TableColumns.Quantity).innerHTML.trim()),
                MinPrice: minPrice,
                AvgPrice: avgPrice,
                MaxPrice: maxPrice,
                IsChat: isChat,
            };
        });
};
