/*jslint browser: true*/
var arrayForSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sRand() {
    'use strict';
    return Math.random() > 0.5 ? 1 : -1;
}

function sBubble(arrayForSort) {
    'use strict';
    var i, j, tmp;
    for (i = 0; i < arrayForSort.length - 1; i += 1) {
        for (j = 0; j < arrayForSort.length - 1; j += 1) {
            if (arrayForSort[j + 1] < arrayForSort[j]) {
                tmp = arrayForSort[j + 1];
                arrayForSort[j + 1] = arrayForSort[j];
                arrayForSort[j] = tmp;
            }
        }
    }
    return arrayForSort;
}

arrayForSort.sort(sRand);

window.addEventListener('load', function () {
    'use strict';
    document.getElementById('arrayForSort').innerHTML = arrayForSort;
    document.getElementById('sortButton').addEventListener('click', function () {
        document.getElementById('sortResult').innerHTML = sBubble(arrayForSort);
    }, false);
}, false);