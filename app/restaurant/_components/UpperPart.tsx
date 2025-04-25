"use client";

import AuthenticationModal from "@/components/AuthenticationModal";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
  UtensilsCrossed,
  Coffee,
  Pizza,
  Beer,
  Star,
  MapPin,
  Clock,
  Phone,
  Check,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const UpperPart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [pendingRedirect, setPendingRedirect] = useState<string | null>(null);
  const user = useCurrentUser();
  const redirectOptions = [
    {
      title: "Order Online",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      url: "#order",
      color: "bg-orange-500",
    },
    {
      title: "Book Table",
      icon: <Coffee className="w-8 h-8" />,
      url: "#book",
      color: "bg-blue-500",
    },
    {
      title: "Menu",
      icon: <Pizza className="w-8 h-8" />,
      url: "#menu",
      color: "bg-green-500",
    },
    {
      title: "Reviews",
      icon: <Beer className="w-8 h-8" />,
      url: "#reviews",
      color: "bg-purple-500",
    },
  ];

  const handleOptionClick = (url: string) => {
    if (!user) {
      setIsOpen(true);
      setPendingRedirect(url);
    } else {
      window.location.href = url;
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const element = document.getElementById("menu");
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (user) {
      setIsOpen(false);
      if (pendingRedirect) {
        window.location.href = pendingRedirect;
        setPendingRedirect(null);
      }
    }
  }, [pendingRedirect, user]);
  return (
    <>
      <AuthenticationModal isOpen={isOpen} onClose={onClose} />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Image Section */}
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Sher E Punjab Restaurant"
            className="w-full h-full object-cover"
            width={2000}
            height={800}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Restaurant Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Sher E Punjab
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  North Indian, Punjabi, Chinese
                </p>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-lg font-semibold">4.2</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">2K+ Ratings</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-lg">
                <Check className="w-5 h-5 text-green-600" strokeWidth={5} />

                <span className=" text-green-600 font-semibold">
                  Enerzyflow
                </span>
                <span className=" text-green-600 font-semibold italic">
                  verified
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Kona Expressway, Howrah, West Bengal</span>
                <button
                  type="button"
                  className="ml-4 bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Directions
                </button>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>Open 11 AM - 11 PM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 1234567890</span>
              </div>
            </div>

            {/* Redirect Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {redirectOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={
                    index !== 2
                      ? () => handleOptionClick(option.url)
                      : () => {
                          handleScroll();
                        }
                  }
                  className={`${option.color} text-white rounded-lg p-4 flex flex-col items-center justify-center transition-transform hover:scale-105`}
                >
                  {option.icon}
                  <span className="mt-2 font-semibold">{option.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperPart;
