var vatRate = 0.1;
var shippingRate = 0;
var fadeTime = 300;

$('.product-quantity-counter').change(function () {
	updateQuantity(this);
});

$('.remove-product').click(function(){
	removeProduct(this);
});

function recalculateCart() {
	var subTotal = 0;
	$('.product').each(function(){
		subTotal += parseFloat($('.product-price').text());
	});
	var tax = subTotal * vatRate;
	var shipping = 0;
	if (subTotal > 5000000) {
		shipping = 0;
	} else {
		shipping = 0.05 * subTotal;
	}
	var totalPrice = subTotal + tax + shipping;
	$('#vatValue').html(tax.toFixed(1));
	$('#shippingValue').html(shipping.toFixed(1));
	$('#totalCartPrice').html(totalPrice.toFixed(1));
}

function removeProduct(removeButton) {
	var productItem = $(removeButton).parent();
	productItem.slideUp(fadeTime, function(){
		productItem.remove();
		recalculateCart;
	});
}

function updateQuantity(quantityInput) {
	var price = parseFloat($('.product-price').text());
	alert(price);
	var quantity = $(quantityInput).val();
	var productsPrices = price * quantity;
	$('.product-price').each(function(){
		$(this).fadeOut('fadeTime', function() {
			$(this).text(productsPrices.toFixed(1));
			recalculateCart();
			$(this).fadeIn(fadeTime);
		});
	});
}