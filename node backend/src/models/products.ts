import mongoose, { Schema, Document } from 'mongoose';

interface Product extends Document {
  ProductID: string;
  ProductName: string;
  Category: string;
  Price: number;
}

const productSchema = new mongoose.Schema({
  ProductID: { type: String, unique: true, required: true },
  ProductName: { type: String, required: true },
  Category: { type: String, required: true },
  Price: { type: Number, required: true }
});

export const Product = mongoose.model<Product>("Product", productSchema);
