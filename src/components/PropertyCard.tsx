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
                <div className="mt-2 flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`${
                                i <= property.rating
                                    ? " text-yellow-400"
                                    : " text-gray-400"
                            } h-5 w-5 fill-current`}
                        >
                            <path
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    ))}

                    <span className="ml-2 text-sm text-gray-600">
                        {property.reviewCount} reviews
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
