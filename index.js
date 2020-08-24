var prodCount = 50;

function prodInc(count) {
    prodCount += count;
    updateProdCount();
}

function updateProdCount() {
    var prodCountSpan = document.getElementsByClassName("prod-count");
    prodCountSpan[0].innerHTML = prodCount.toString();
}
