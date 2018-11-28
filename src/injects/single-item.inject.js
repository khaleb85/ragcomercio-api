/* eslint no-unused-vars: 0 no-undef: 0 */
function getTableItems(querySelector, tableSelector) {
    Array.from(document.querySelectorAll(`${tableSelector} > tbody > tr`))
        .map(element => {
            let minPrice = element.querySelector(querySelector.TableColumns.MinPrice);
            let avgPrice = element.querySelector(querySelector.TableColumns.AvgPrice);
            let maxPrice = element.querySelector(querySelector.TableColumns.MaxPrice);
            let isChat = false;

            if (minPrice && avgPrice && maxPrice) {
                minPrice = minPrice.innerText.trim();
                avgPrice = avgPrice.innerText.trim();
                maxPrice = maxPrice.innerText.trim();
                isChat = true;
            } else {
                minPrice = null;
                avgPrice = null;
                maxPrice = null;
            }

            return {
                Name: element.querySelector(querySelector.TableColumns.Name).innerText.trim(),
                quantity: parseInt(element.querySelector(querySelector.TableColumns.Quantity).innerHTML.trim()),
                MinPrice: minPrice,
                AvgPrice: avgPrice,
                MaxPrice: maxPrice,
                isChat,
            };
        });
}
document.addEventListener('DOMContentLoaded', function() {

    alert('batata');
});
