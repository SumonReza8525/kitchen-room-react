import React from "react";
import { CookingPot } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { CheckCircle } from "lucide-react";
const ShowCard = ({ item, currentOrders, cookingOrders, readyToServe }) => {
  return (
    <div className="h-32 border-3 border-dotted border-amber-500 flex justify-between items-center px-3 rounded-2xl">
      {item === "Current Orders" ? (
        <ClipboardList className="w-10 h-10 text-gray-500" />
      ) : item === "Currently Cooking" ? (
        <CookingPot className="w-10 h-10 text-amber-500" />
      ) : (
        <CheckCircle className="w-10 h-10 text-green-600" />
      )}

      <div className="flex justify-center items-center flex-col">
        <p
          className={`text-xl font-semibold ${item === "Current Orders" ? "text-gray-500" : item === "Currently Cooking" ? "text-amber-500" : "text-green-400"}`}
        >
          {item}
        </p>
        <p className="text-4xl font-bold">
          {item === "Current Orders"
            ? currentOrders.length
            : item === "Currently Cooking"
              ? cookingOrders.length
              : readyToServe.length}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
