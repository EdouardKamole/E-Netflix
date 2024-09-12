import React, { useEffect, useState } from "react";
import "./PlanScreen.css"; // Ensure this file exists and is named correctly
import db from "./Firebase"; // Import 'db' as a default export
// No need to import auth unless you are using it in this file

function PlanScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await db
          .collection("products")
          .where("active", "==", true)
          .get();

        const products = {}; // Initialize products as an object

        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();

          const priceSnap = await productDoc.ref.collection("prices").get();

          priceSnap.docs.forEach((doc) => {
            products[productDoc.id].prices = {
              priceId: doc.id,
              priceData: doc.data(),
            };
          });
        });

        setProducts(products); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error); // Error handling
      }
    };

    fetchProducts();
  }, []);

  console.log(products); // Log products to verify fetched data

  return <div className="planScreen">{/* Render your plans here */}</div>;
}

export default PlanScreen;
