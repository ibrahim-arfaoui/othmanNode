import fs from "fs";
import path from "path";
import csv from "csv-parser";
import dotenv from "dotenv";
import { Product } from "../models/products";
import { Sale } from "../models/sales";
import connectDB from '../database';

dotenv.config();

async function populateDatabase() {
    try {

        connectDB();

        // Populate Products
        const productFilePath = path.join(__dirname, "../../dataset/products.csv");
        const products: any[] = [];

        fs.createReadStream(productFilePath)
            .pipe(csv())
            .on("data", (row) => {
                products.push({
                    ProductID: row.ProductID,
                    ProductName: row.ProductName,
                    Category: row.Category,
                    Price: parseFloat(row.Price)
                });
            })
            .on("end", async () => {
                await Product.insertMany(products);
                console.log("Products imported successfully.");
            });

        // Populate Sales
        const salesFilePath = path.join(__dirname, "../../dataset/sales.csv");
        const sales: any[] = [];

        fs.createReadStream(salesFilePath)
            .pipe(csv())
            .on("data", (row) => {
                sales.push({
                    SaleID: row.SaleID,
                    ProductID: row.ProductID,
                    Quantity: parseInt(row.Quantity, 10),
                    Date: new Date(row.Date),
                    TotalAmount: parseFloat(row.TotalAmount)
                });
            })
            .on("end", async () => {
                await Sale.insertMany(sales);
                console.log("Sales imported successfully.");
                process.exit(0);
            });
    } catch (error) {
        console.error("Error populating database:", error);
        process.exit(1);
    }
}

populateDatabase();
