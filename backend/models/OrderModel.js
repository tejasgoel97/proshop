import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    ShippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      Country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },

      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: String,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      requried: true,
      default: false,
    },
    paidAt: {
      type: Date,
      required: true,
    },
    isDelievered: {
      type: Boolean,
      requried: true,
      default: false,
    },
    delieveredAt: {
      type: Date,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);

export default Order;
