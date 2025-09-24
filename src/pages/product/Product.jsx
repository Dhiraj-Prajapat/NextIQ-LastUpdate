import React from "react";
import ProductPortfolio from "./ProductPortfolio";
import NewProductSec from "./NewProductSec";
import ContactUs from "../ContactUs";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <>
      <main id="Product-Portfolio">
        <section className="main_container">
          <ProductPortfolio />
        </section>
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <NewProductSec />
          </motion.div>
        </section>
        <section className="contactUs w-full mx-auto overflow-hidden border-t border-gray-200">
          <ContactUs />
        </section>
      </main>
    </>
  );
};

export default Product;
