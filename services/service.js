"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
var ProductServices = /** @class */ (function () {
    function ProductServices() {
    }
    ProductServices.prototype.addproduct = function () {
        console.log("api call for add product");
    };
    ProductServices.prototype.listproduct = function () {
        console.log("api call for list product");
    };
    ProductServices.prototype.editproduct = function () {
        console.log("api call for edi product");
    };
    return ProductServices;
}());
exports.ProductServices = ProductServices;
