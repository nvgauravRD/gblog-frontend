import { BlogPostWithoutImage } from "../components/BlogComponents/BlogPostWithoutImage";
import { Data } from "../Data/Data";

export default function HomePage() {
  return (
    <>
      {/* main wrapper */}
      <main className="flex flex-col items-center min-h-96 p-5">
        {/* the Queue of blog posts are rendered here */}
        <main className="flex flex-wrap justify-center">{RenderPosts()}</main>
      </main>
    </>
  );
}

// this function gets the posts and forms them as queue and renders them back
// this step is done to keep the latest post at the Top
// Doubly-Ended queue is used to traverse from fron to back and back to front
// Only traversal part is implemented Currently
function RenderPosts() {
  let front = -1,
    rear = -1;

  // stores the queue of JSX elements
  const BlogQueue = [];

  if (Data.length > 0) {
    front = 0;
    rear = Data.length - 1;
    for (let i = rear; i >= front; i--) {
      BlogQueue.push(<BlogPostWithoutImage data={Data[i]} key={i} />);
    }
    return <>{BlogQueue}</>;

    // to handle if the Data is empty
  } else {
    return null;
  }
}
