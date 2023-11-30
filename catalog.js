document.addEventListener('DOMContentLoaded', function () {
    function addToCartHandler(bouquetName) {
        alert('Букет "' + bouquetName + '" добавлен в корзину!');
    }

    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var bouquetName = this.parentElement.getAttribute('data-name');
            addToCartHandler(bouquetName);
        });
    });
});
