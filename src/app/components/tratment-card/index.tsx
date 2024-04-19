import Image from "next/image";
import { useState } from "react";
import currencySymbolMap from "currency-symbol-map";

export default function TreatmentCard(treatment: Treatment) {
  let { title, variants } = treatment;
  const [accordionOpen, setAccordionOpen] = useState(false);
  const currencyCode = variants[0].price.currency_code;
  const currencySymbol: string | undefined = currencySymbolMap(currencyCode);
  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <div className="flex flex-col">
      <div className="flex bg-white w-full">
        {/* Imagen */}
        <div className="relative w-2/5">
          <Image
            src={"/img/product1.jpg"}
            alt={title}
            width={600}
            height={300}
          />
          <a
            href="#"
            className="absolute top-[-1rem] left-[-1rem] flex items-center justify-center w-10 h-10 bg-black rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3a2 2 0 012-2h14a2 2 0 012 2v2.236a2 2 0 01-.465.127l-1.789 7.158A2 2 0 0116.052 14H7.948a2 2 0 01-1.694-.479l-1.789-7.158A2 2 0 013 5.236V3zm0 0l.579 2.316a2 2 0 001.695 1.684L7 7h10l1.726.684a2 2 0 001.695-1.684L21 3H3zm10 18a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </a>
        </div>
        {/* Contenido de la tarjeta */}
        <div className="flex flex-col justify-between px-4 w-3/5">
          <div>
            <div className="flex justify-center mb-2">
              <p className="flex items-center justify-center text-base bg-accent rounded-md p-1 text-black w-full">
                OFFER |&nbsp;<span className="font-bold">20% OFF</span>
              </p>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-700 capitalize">
              {title.toLowerCase()} | 1 Application
            </h2>
          </div>
          <div>
            <div className="flex mb-4 items-center gap-3">
              <p className="text-base bg-accent rounded-md p-1 font-bold text-black">
                151,96 {currencySymbol}
              </p>
              <p className="text-sm font-bold text-gray-500 line-through">
                {variants[0].price.amount} {currencySymbol}
              </p>
            </div>
            <a href="#" className="block bg-black text-white text-center py-2">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full py-2">
        <button
          onClick={handleAccordion}
          className="text-gray-700 flex items-center hover:text-black"
        >
          What's included{" "}
          <span className="ml-1">
            {accordionOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform rotate-90"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            accordionOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <p>Here all the thinks included</p>
        </div>
      </div>
    </div>
  );
}
