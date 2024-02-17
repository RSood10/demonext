import Link from "next/link";
import Image from "next/image";

export default function PostCards(props: any) {
  // console.log(props.card);
  return (
    <div className="bg-slate-400 m-4 rounded ">
      <div className=" h-4/5">
        <Image src="/demoimg.jpg" alt="Image" width={500} height={700} />
      </div>
      <h1 className="p-6 font-semibold text-lg">{props.card.title}</h1>
      {/* <p className="p-6">{props.card.body}</p> */}
      <Link
        href={`blog/${props.card.id}`}
        className="p-6 text-blue-600 underline"
      >
        Read More
      </Link>
    </div>
  );
}
