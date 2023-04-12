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
                <h4>{property.title}</h4>
                <div>
                    {property.beds} beds &bull; {property.baths} bathrooms
                </div>
                <div>{property.price} / night</div>
                <div>
                    {property.rating}/5 stars (based on {property.reviewCount}{" "}
                    reviews)
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
