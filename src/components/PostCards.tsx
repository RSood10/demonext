import Link from "next/link";

export default function PostCards(props: any) {
  //   const getImage = async () => {
  //     const data = await fetch("https://picsum.photos/v2/list?page=2&limit=1");
  //     const res = await data.json();
  //     console.log(res);
  //   };
  return (
    <div className="bg-slate-400 m-4 rounded">
      <h1 className="p-6 font-semibold text-lg">{props.title}</h1>
      <p className="p-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto vero
        necessitatibus, facilis asperiores enim voluptatibus, suscipit qui, eum
        consequuntur voluptatem delectus nisi odit id dolor facere architecto
        debitis quam quisquam. Nam eveniet porro sapiente eius quidem provident
        excepturi, laboriosam magni, sint molestias voluptatibus officiis libero
        recusandae! Provident, ex rerum? Natus!
      </p>
      <Link href="blog/singleblog" className="p-6 text-blue-600 underline">
        Read More
      </Link>
    </div>
  );
}
