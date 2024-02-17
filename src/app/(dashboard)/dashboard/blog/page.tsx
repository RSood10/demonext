import PostCards from "@/components/PostCards";

export default function About() {
  const titles = [
    {
      title: "title1",
      id: 1,
    },
    {
      title: "title2",
      id: 2,
    },
    {
      title: "title3",
      id: 3,
    },
    {
      title: "title4",
      id: 4,
    },
  ];
  return (
    <div>
      <h1 className="p-4 font-bold">Blog</h1>
      <div>
        {titles.map((card) => {
          return <PostCards key={card.id} title={card.title} />;
        })}
      </div>
    </div>
  );
}
