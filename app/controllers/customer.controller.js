const db = require("../models");
const Customers = db.customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customers
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Customers
    const customers = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    try {
        const response = await Customers.create(customers);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || "We faced some issue, please try again later"
        })
    }
};

// Retrieve all Customerss from the database.
exports.findAll = (req, res) => {

};

// Find a single Customers with an id
exports.findOne = async (req, res) => {
    // Getting customer id
    const id = req.params.id;
    try {
        const response = await Customers.findByPk(id);
        if (response) {
            // Customers found
            res.status(200).json({
                "message": "User fetched successfully",
                "user": response
            });
        }
        else {
            // No customers found
            res.status(200).json({
                "message": "No customers found",
                "user": null
            });
        }
    } catch (error) {
        res.status(500).json({
            "message": "We faced some issue, please try again later"
        });
    }
};

// Update a Customers by the id in the request
exports.update = async (req, res) => {
    // Getting customer id
    const id = req.params.id;
    // Body to update
    const body = req.body;
    try {
        const response = await Customers.update(body, {
            where: { id: id }
        });
        if (response == 1) {
            // Updated successfully
            res.status(200).json({
                "message": "Customer updated successfully",
                "customer": req.body
            });
        } else {
            // Some issue happens
            res.status(400).json({
                "message": "Customer could not be updated",
                "customer": null
            });
        }
    } catch (error) {
        res.status(500).json({
            "message": "We faced some issue, please try again later"
        });
    }
};

// Delete a Customers with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Customerss from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Customerss
exports.findAllPublished = (req, res) => {

};