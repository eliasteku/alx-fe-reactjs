import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,          // keep cache for 5 minutes
    staleTime: 1000 * 60,              // data considered fresh for 1 minute
    refetchOnWindowFocus: true,        // refetch when window regains focus
    keepPreviousData: true,            // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded-md mb-4"
      >
        Refresh Posts {isFetching && " (Fetching...)"}
      </button>

      <ul className="space-y-2">
        {data?.data.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded-md shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
