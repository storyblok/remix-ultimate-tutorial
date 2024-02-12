import { renderRichText } from "@storyblok/react";

const Article = ({ blok }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {blok.image && (
          <img
            className="  md:h-96 w-full mb-10 object-cover object-center rounded"
            alt={blok.image.alt}
            src={`${blok.image.filename}/m/1600x0`}
          />
        )}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.title}
          </h1>
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600">
            {blok.subtitle}
          </h2>
          <div
            className="mb-8 leading-relaxed text-left max-w-full prose"
            dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) }}
          />
        </div>
      </div>
    </section>
  );
};
export default Article;
