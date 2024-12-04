import express, { Request, Response } from 'express';
import { getTotalSales, getTrendingProducts, getCategorySales } from '../scripts/functions';

const router = express.Router();

// Endpoint for trending products
router.get('/trending_products', async (req, res) => {
    try {
        const trendingProducts = await getTrendingProducts();
        res.json({ trendingProducts });
    } catch (error) {
        res.status(500).send('Error fetching trending products');
    }
});

// Endpoint for category sales
router.get('/category_sales', async (req, res) => {
    try {
        const categorySales = await getCategorySales();
        res.json({ categorySales });
    } catch (error) {
        res.status(500).send('Error fetching category sales');
    }
});


// Endpoint for total sales
router.get('/total_sales', async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            res.status(400).send('Start date and end date are required');
            return; // Always return after sending a response
        }

        if (typeof startDate === 'string' && typeof endDate === 'string') {
            const start = new Date(startDate);
            const end = new Date(endDate);

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                res.status(400).json({ message: "Invalid date format" });
                return; // Always return after sending a response
            }

            const totalSales = await getTotalSales(start, end);
            res.json({ totalSales });
        } else {
            res.status(400).send('Invalid query parameters');
        }
    } catch (error) {
        console.error('Error fetching total sales:', error);
        res.status(500).send('Error fetching total sales');
    }
});

export default router;
