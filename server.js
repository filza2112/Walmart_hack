// server.js (Corrected for Swatch-only data)
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/products", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://serpapi.com/search.json?engine=walmart&query=clothing&api_key=${process.env.SERPAPI_KEY}`
    );

    const enrichedSwatches = [];
    if (data.organic_results) {
      // 1. Loop through each product
      data.organic_results.forEach((product) => {
        // 2. Check if the product has swatches
        if (product.variant_swatches && product.variant_swatches.length > 0) {
          // 3. Loop through the swatches of that product
          product.variant_swatches.forEach((swatch) => {
            // 4. Create a new object combining swatch and parent info
            enrichedSwatches.push({
              // --- Data from the parent product ---
              product_id: `${product.product_id}_${swatch.name}`, // Create a new unique ID
              title: product.title,
              thumbnail: product.thumbnail, // Use parent thumbnail as main image
              price: product.primary_offer?.offer_price || 19.99,
              description: product.title, // Use title as description

              // --- Data from the specific swatch ---
              swatch_name: swatch.name,
              swatch_image: swatch.swatch_image_url,
              swatch_link: swatch.product_page_url,
            });
          });
        }
      });
    }

    res.json(enrichedSwatches);
  } catch (error) {
    console.error("Error fetching SerpAPI data:", error.message);
    res.status(500).json({ error: "Failed to fetch product data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});