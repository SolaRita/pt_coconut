import CardIcon from "@/app/components/molecules/card-icon/card-icon";
import Image from "next/image";

const productData: ProductData = {
  title: "Combination of 3 hyaluronic acids",
  img: "image",
  actions: [
    {
      title: "Low",
      description: "Diminishes wrinkles and impoves skin texture",
      icon: "low",
    },
    {
      title: "Medium",
      description: "Improves skin firmness and quality.",
      icon: "medium",
    },
    {
      title: "High",
      description: "Deeply moisurises for protected, silky skin.",
      icon: "high",
    },
  ],
};

export default function ProductCard() {
  const { title, img, actions } = productData;
  return (
    <div className="relative w-full flex flex-col items-center bg-white-beige rounded-lg shadow-md h-auto">
      <div className="flex overflow-hidden rounded-t-lg">
        <Image
          src={`/img/${img}.png`}
          alt={title}
          width={600}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <h2
        className={`absolute text-l bg-white rounded-2xl flex justify-center items-center text-black font-bold overflow-hidden px-2 py-1 z-1`}
        style={{ top: "35%" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-1 justify-end mx-6 mt-8 mb-6">
        {actions.map((action: ProductAction, index: number) => (
          <CardIcon key={index} {...action} />
        ))}
      </div>
    </div>
  );
}
