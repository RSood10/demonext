import Image from "next/image";

export default async function singlepage({ params }: any) {
  const post_id = params; //it's like {singlepage : '1'}
  const data = await getImage(post_id.singlepage);

  return (
    <div className="text-white">
      <div className="flex gap-10">
        <div className=" h-4/5">
          <Image src="/demoimg.jpg" alt="Image" width={500} height={500} />
        </div>
        <div className="pt-8 pb-8 w-1/2">
          <h1 className="text-4xl font-semibold">{data.title}</h1>
          <p className="text-justify w-1/2">
            {data.title} <br />
            {data.body}
          </p>
        </div>
      </div>
    </div>
  );
}
async function getImage(id: any) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data.json();
}
