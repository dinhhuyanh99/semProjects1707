var vatRate = 0.1;
var shippingRate = 0.03;
var fadeTime = 300;

function recalculateCart() {
	var subTotal = 0;
	if($('.product').length < 1) {
		subTotal = 0;
	} else {
		$('.product').each(function(){
			subTotal += parseFloat($('.products-total-price').text());
		});
	}
	var tax = subTotal * vatRate;
	var shipping = (subTotal > 0 ? shippingRate : 0)
	var totalPrice = subTotal + tax + shipping;
	$('#vatValue').html(tax.toFixed());
	$('#shippingValue').html(shipping.toFixed());
	$('#totalCartPrice').html(totalPrice.toFixed());
}

function removeProduct(removeButton) {
	var productItem = $(removeButton).parent().parent();
	productItem.slideUp(fadeTime, function(){
		productItem.remove();
		recalculateCart();
	});
}

function updateQuantity(quantityInput) {
	const price = parseFloat($('.product-price').text());
	var quantity = $(quantityInput).val();
	var productsPrices = price * quantity;
	$('.products-total-price').each(function(){
		$(this).fadeOut('fadeTime', function() {
			$(this).text(productsPrices.toFixed());
			recalculateCart();
			$(this).fadeIn(fadeTime);
		});
	});
}

$('.product-quantity-counter').change(function () {
	updateQuantity(this);
});

$('.remove-product').click(function(){
	removeProduct(this);
});