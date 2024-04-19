import Image from "next/image";

export default function CardIcon({ title, description, icon }: ProductAction) {
  return (
    <div className="bg-transparent flex gap-4 items-center">
      <div>
        <Image src={`/icons/${icon}.png`} alt={title} width={80} height={80} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <p className="text-black ml-2 flex-grow text-sm">
            <span className="font-bold">{title}:</span> {description}
          </p>
        </div>
      </div>
    </div>
  );
}
