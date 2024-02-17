import Image from "next/image";

export default function singlepage() {
  return (
    <div className="text-white">
      <div className="pt-8 pb-8">
        <h1 className="text-4xl font-semibold">Title</h1>
      </div>
      <div className="flex gap-10">
        <div className=" h-4/5">
          <Image src="/demoimg.jpg" alt="Image" width={500} height={700} />
        </div>

        <p className="text-justify w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          reiciendis minima, explicabo animi soluta repellat sit sunt rerum vero
          est molestiae laborum quos architecto sequi cum alias iste. Soluta
          similique animi dolor illo facere nisi iste. Sint voluptate ad odio
          maiores ratione veritatis. Architecto cupiditate veritatis optio esse
          consectetur quibusdam?
        </p>
      </div>
    </div>
  );
}
