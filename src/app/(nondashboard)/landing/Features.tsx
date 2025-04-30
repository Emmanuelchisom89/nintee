"use client";

import React from "react";
import { motion } from "framer-motion";
import FeaturesCard from "./FeaturesCard";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-fill sm:w-2/3 mx-auto"
        >
          Quickly find a home you want using our effective search filters!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} variants={itemVariants}>
              <FeaturesCard
                imageSrc={`/landing-search${3 - i}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Browse Rental Listing With Ease",
                    "Simplify Your Rental Search With Advanced",
                  ][i]
                }
                description={
                  [
                    "Discover your best rental options with user reviews and ratings.",
                    "Get access to user reviews and ratings for a better understanding of rental options.",
                    "Find trustworthy and verified rentals to ensure a hassle-free experience.",
                  ][i]
                }
                linkText={["Explore", "Search", "Discover"][i]}
                linkHref={["/explore", "/search", "/discover"][i]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
