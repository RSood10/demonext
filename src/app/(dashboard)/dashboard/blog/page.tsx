import PostCards from "@/components/PostCards";

export default async function About() {
  const cards = await getImage();
  // console.log(cards);
  // const titles = [
  //   {
  //     title: "title1",
  //     id: 1,
  //   },
  //   {
  //     title: "title2",
  //     id: 2,
  //   },
  //   {
  //     title: "title3",
  //     id: 3,
  //   },
  //   {
  //     title: "title4",
  //     id: 4,
  //   },
  // ];
  return (
    <div>
      <h1 className="p-4 font-bold">Blog</h1>
      <div className="flex flex-row flex-wrap ">
        {cards.map((card: any) => {
          if (card.id < 20)
            return (
              <div className=" w-1/3" key={card.id}>
                <PostCards card={card} />
              </div>
            );
          else return "";
        })}
      </div>
    </div>
  );
}
async function getImage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}
