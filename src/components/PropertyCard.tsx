import { Property } from "../App";

type PropertyCardProps = {
    property: Property;
};

const PropertyCard = (props: PropertyCardProps) => {
    const { property } = props;
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <img className="" alt={property.imageAlt} src={property.imageUrl} />
            <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                    {property.beds} beds &bull; {property.baths} bathrooms
                </div>
                <h4 className="truncate text-lg font-semibold leading-tight">
                    {property.title}
                </h4>
                <div className="mt-1">
                    {property.price}
                    <span className="text-sm text-gray-600"> / night</span>
                </div>
                <div className="mt-4">
                    <span className="font-semibold text-teal-500">
                        {property.rating}/5 stars (
                    </span>
                    <span className="text-sm text-gray-600">
                        based on {property.reviewCount} reviews)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
