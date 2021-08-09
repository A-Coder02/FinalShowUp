'use strict';

let addProductToCart = document.querySelector('.addtokart');
let productName = document.querySelector('.product-name');
let productShortDetail = document.querySelector('.product-shorts');
let productPrice = document.querySelector('.p-price > .price');
let productQuantity = document.querySelector('#qty');
let productMainImage= document.querySelector('.large-img');

let productNameOfCart = document.querySelector('.cart-item-name');
let productShortDetailOfCart = document.querySelector('.cart-item-spec');
let productPriceOfCart = document.querySelector('.cart-item-price');
let productQuantityOfCart = document.querySelector('.qty');
let productMainImageOfCart = document.querySelector('.cart-item-img');

let createCartItem = document.createElement('LI');
let Cart = document.querySelector('.cart-item-list');

addProductToCart.addEventListener('click',()=>{
	openCart();
	createCartItem.classList.add('cart-item');
	Cart.appendChild(createCartItem);
	
	let addImage = document.createElement(img); addImage.classList = 'cart-item-img';
	let addShortDetails = document.createElement(img); addImage.classList = 'cart-item-img';
	
})

