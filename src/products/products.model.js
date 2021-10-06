const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const productSchema = new Schema(
    {
        Product_Name: {
            type: String,
            required: true,
            trim: true,
        },
        Price: {
            type: String,
            required: true,
            trim: true,
        },
        Category: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('Product', productSchema);