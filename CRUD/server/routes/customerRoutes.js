const express = require('express');
const { createCustomer, getAllCustomer, getCustomerById, deleteCustomerById } = require('../controllers/customerController');

const router = express.Router();

router.post('/', createCustomer);
router.get('/',getAllCustomer);
router.get('/:id', getCustomerById);
router.delete('/:id', deleteCustomerById);

module.exports = router;