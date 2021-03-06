const express = require('express');
const router = express.Router();
const donationsCtrl = require('../../controllers/api/donations');

// GET /api/donations/cart
router.get('/cart', donationsCtrl.cart);
// POST /api/donations/cart/donations/:ein
router.post('/cart/charities/:id', donationsCtrl.addToCart);
// POST /api/donations/cart/amount
router.put('/cart/amount', donationsCtrl.setDonationAmountInCart);
// POST /api/donations/cart/checkout
router.post('/cart/checkout', donationsCtrl.checkout);
// GET /api/donationsRecord
router.get('/donationsRecord', donationsCtrl.donationsRecord);

module.exports = router;