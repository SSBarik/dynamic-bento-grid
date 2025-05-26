import React from "react";
import CollectonCard from "./CollectionCard";
import { collections } from "../data/collections";

const FeaturedCollections: React.FC = () => {
  return (
    <section className="container max-w-[1440px] mx-4 my-4 shadow-lg px-3 md:px-4 lg:px-24 py-[90px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 grid-rows-[auto, 1fr, 1fr] gap-6 md:gap-4 lg:gap-8 mx-auto">
        <div className="col-span-1 md:col-span-6 lg:col-span-12">
          <h2 className="text-3xl">Our Collections</h2>
        </div>

        <div className="col-span-1 md:col-span-3 lg:col-span-6 row-span-2">
          <CollectonCard collection={collections[0]} variant="primary" />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-6">
          <CollectonCard collection={collections[1]} variant="secondary" />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-6">
          <CollectonCard collection={collections[2]} variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
