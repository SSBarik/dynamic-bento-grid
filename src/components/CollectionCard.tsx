import React from "react";
import { collection } from "../models/collection";

interface CollectionCardProps {
  collection: collection;
  variant?: "primary" | "secondary";
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
  variant,
}) => {
  const ratioClasses =
    variant === "primary"
      ? "aspect-[319/580] md:aspect-[338/580] lg:aspect-[594/580]"
      : "aspect-[319/337] md:aspect-[338/276] lg:aspect-[594/276]";

  return (
    <div
      className={`flex items-end bg-cover bg-center p-4 h-full overflow-hidden rounded-lg ${ratioClasses}`}
      style={{ backgroundImage: `url(${collection.image_url})` }}
    >
      <div>
        <h3 className="text-white text-sm">{collection.name}</h3>
        <p className="text-white">{collection.description}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
