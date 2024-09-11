import { postData } from "../../Data/Data";

// this function returns the blog post without an image
export function BlogPostWithoutImage({ data }: { data: postData }) {
  return (
    <article className="min-w-[300px] bg-white w-[300px] rounded overflow-hidden m-2">
      <section className="p-2">
        <h5 className="mt-2">{data.title}</h5>
        <span className="bg-gray-200 rounded text-xs p-1">{data.topic}</span>
        <p className="text-xs my-2">
          <i className="fas fa-calendar mr-2"></i>
          {data.date}
        </p>
        <p className="text-xs font-light">{data.discription}</p>
        <button className="mt-2">
          <i className="fas fa-arrow-up-right-from-square text-sm"></i>
        </button>
      </section>
    </article>
  );
}
