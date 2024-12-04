import mongoose, { Schema, Document } from 'mongoose';


interface Sale extends Document {
  SaleID: string;
  ProductID: string;
  Quantity: number;
  Date: Date;
  TotalAmount: number;
}

const saleSchema = new mongoose.Schema({
  SaleID: { type: String, unique: true, required: true },
  ProductID: { type: String, required: true, ref: 'Product' },
  Quantity: { type: Number, required: true },
  Date: { type: Date, required: true },
  TotalAmount: { type: Number, required: true }
});

export const Sale = mongoose.model<Sale>("Sale", saleSchema);
