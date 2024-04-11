"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeFunction = /** @class */ (function () {
    function MergeFunction() {
    }
    MergeFunction.prototype.merge = function (collection1, collection2, collection3) {
        var result = [];
        var i = 0, j = collection2.length - 1, k = 0;
        while (i < collection1.length && j >= 0 && k < collection3.length) {
            if (collection1[i] <= collection3[k] &&
                collection1[i] <= collection2[j]) {
                result.push(collection1[i]);
                i++;
            }
            else if (collection2[j] <= collection3[k] &&
                collection2[j] <= collection1[i]) {
                result.push(collection2[j]);
                j--;
            }
            else {
                result.push(collection3[k]);
                k++;
            }
        }
        var remaining1 = collection1.slice(i);
        var remaining2 = collection2.slice(0, j + 1).reverse();
        var remaining3 = collection3.slice(k);
        var remaining = this.mergeSortedArrays(remaining1, remaining2);
        var mergedRemaining = this.mergeSortedArrays(remaining, remaining3);
        // Add merged remaining arrays to result
        result.push.apply(result, mergedRemaining);
        return result;
    };
    MergeFunction.prototype.mergeSortedArrays = function (arr1, arr2) {
        var merged = [];
        var i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                merged.push(arr1[i]);
                i++;
            }
            else {
                merged.push(arr2[j]);
                j++;
            }
        }
        // Add remaining elements from each array
        merged.push.apply(merged, arr1.slice(i));
        merged.push.apply(merged, arr2.slice(j));
        return merged;
    };
    return MergeFunction;
}());
exports.default = MergeFunction;
