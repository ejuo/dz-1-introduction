/*jslint browser: true*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sRand() {
    'use strict';
    return Math.random() > 0.5 ? 1 : -1;
}

function sBubble(arr) {
    'use strict';
    var i, j, tmp;
    for (i = 0; i < arr.length - 1; i += 1) {
        for (j = 0; j < arr.length - 1; j += 1) {
            if (arr[j + 1] < arr[j]) {
                tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

arr.sort(sRand);

window.onload = (function () {
    'use strict';
    document.getElementById('arr').innerHTML = arr;
    document.getElementById('btn').onclick = function () { document.getElementById('sarr').innerHTML = sBubble(arr); };
}());