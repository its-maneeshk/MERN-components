const Customer = require('../models/CustomerSchema');

const createCustomer = async(req,res) => {
    const { name, email, phone, address } = req.body;
    const clientIp = req.ip;

    const newCustomer = new Customer(
        { name , email, phone, address, ipAddress : clientIp}
    );

    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }
    catch(error) {
        res.status(500).json({ message : error.message });
    }
};

const getAllCustomer = async(req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ message : error.message });
    }
};

const getCustomerById = async(req, res)  => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message : 'Customer not found.'});
        }
    }
    catch (error) {
        res.status(500).json({ message : error.message});
    }
}

const deleteCustomerById = async(req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (customer) {
            res.status(200).json({ message : 'Customer deleted successfully.'});
        } else {
            res.status(404).json({ message : 'Customer not found.'});
        }
    }
    catch (error) {
        res.status(500).json({ message : error.message});
    }
};

module.exports = { createCustomer, getAllCustomer, getCustomerById, deleteCustomerById };