var loanProducts = require("./loanProducts.json");
module.exports = {
    GetProducts: function () {
        return new Promise(function (resolve, reject) {
            try {
                resolve(loanProducts.products);
            }
            catch (err) {
                reject(err);
            }
        })
    }
}