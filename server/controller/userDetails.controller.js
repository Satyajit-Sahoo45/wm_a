const userBookingDetails = require("../models/userDetails.model");
const ErrorHandler = require("../utils/ErrorHandler");

const AppointmentBook = async (req, res, next) => {
    try {
        const data = req.body.data;

        const bookingDetails = await userBookingDetails.create(data);
        res.status(201).json({
            success: true,
            bookingDetails,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, error.status));
    }
}

module.exports = AppointmentBook