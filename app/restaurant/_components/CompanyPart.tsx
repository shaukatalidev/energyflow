import { Star, Utensils, Info } from "lucide-react";
import Image from "next/image";

const CompanyPart = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Menu Section */}
        <div id="menu" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Utensils className="text-gray-600" size={24} />
            <h2 className="text-2xl font-bold">Menu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Recommended",
                items: [
                  {
                    name: "Butter Chicken",
                    price: "₹320",
                    description:
                      "Creamy tomato based curry with tender chicken",
                  },
                  {
                    name: "Veg Biryani",
                    price: "₹220",
                    description: "Aromatic rice with mixed vegetables",
                  },
                  {
                    name: "Paneer Butter Masala",
                    price: "₹280",
                    description: "Cottage cheese in rich tomato gravy",
                  },
                ],
              },
              {
                category: "Chinese",
                items: [
                  {
                    name: "Chilli Chicken",
                    price: "₹280",
                    description: "Spicy Indo-Chinese chicken preparation",
                  },
                  {
                    name: "Veg Hakka Noodles",
                    price: "₹180",
                    description: "Stir-fried noodles with vegetables",
                  },
                  {
                    name: "Manchurian",
                    price: "₹220",
                    description: "Vegetable balls in spicy sauce",
                  },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-gray-900 font-medium">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Info className="text-gray-600" size={24} />
            <h2 className="text-2xl font-bold">More Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Home Delivery Available</li>
                <li>• Indoor Seating</li>
                <li>• Air Conditioned</li>
                <li>• Accepts Cards</li>
                <li>• Family Friendly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Monday - Sunday</li>
                <li>11:00 AM - 11:00 PM</li>
                <li className="mt-4 text-green-600">Open Now</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Restaurant Food"
            className="w-full h-64 object-cover rounded-lg"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Restaurant Food"
            className="w-full h-64 object-cover rounded-lg"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1574653853027-5382a3d23c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Restaurant Food"
            className="w-full h-64 object-cover rounded-lg"
            width={800}
            height={600}
          />
        </div>

        {/* Explore Other Restaurants */}
        <h2 className="text-2xl font-bold mb-4">Explore Other Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Spice Garden",
              cuisine: "North Indian, Mughlai",
              rating: 4.0,
              image:
                "https://images.unsplash.com/photo-1514516345957-556ca7c90a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "The Chinese Room",
              cuisine: "Chinese, Thai",
              rating: 4.3,
              image:
                "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Café Boulevard",
              cuisine: "Continental, Café",
              rating: 4.1,
              image:
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
          ].map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
                width={800}
                height={600}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center">
                  <div className="bg-green-600 text-white px-2 py-1 rounded flex items-center">
                    <Star size={16} className="mr-1" />
                    {restaurant.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPart;
