"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseWrapper = /** @class */ (function () {
    function ResponseWrapper(message, status, currentPage, numberOfPages, totalResults) {
        this.message = message;
        this.status = status;
        this.currentPage = currentPage;
        this.numberOfPages = numberOfPages;
        this.totalResults = totalResults;
    }
    return ResponseWrapper;
}());
exports.ResponseWrapper = ResponseWrapper;
//# sourceMappingURL=response-wrapper.model.js.map