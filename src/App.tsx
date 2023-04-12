import React from "react";
import logo from "./logo.svg";
import PropertyCard from "./components/PropertyCard";

export type Property = {
    imageUrl: string;
    imageAlt: string;
    beds: number;
    baths: number;
    title: string;
    price: number;
    reviewCount: number;
    rating: number;
};
function App() {
    const data: Property = {
        imageAlt: "Hotel del Paine",
        imageUrl: "/assets/20230211_070702_small.jpg",
        beds: 3,
        baths: 2,
        title: "",
        price: 13.99,
        reviewCount: 149,
        rating: 4,
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-200 p-8">
            <PropertyCard property={data} />
        </div>
    );
}

export default App;
