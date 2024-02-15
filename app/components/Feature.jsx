import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"
    >
      <img
        src={blok.image.filename}
        alt={blok.image.alt}
        className="w-full h-48 xl:h-72 object-cover"
      />
      <div className="px-12 py-6">
        <h3 className="text-2xl text-[#1d243d] font-bold">{blok.name}</h3>
      </div>
    </div>
  );
};

export default Feature;
