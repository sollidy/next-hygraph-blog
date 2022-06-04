import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import { QUERY } from "..";

const graphcms = new GraphQLClient(process.env.GQL_API_URL)

const SINGLE_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content{
        text
      }
      slug
      coverImage {
        id
        url
      }
      author {
        id
        name
      }
      date
    }
  }
`

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(SINGLE_POST,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(QUERY);
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Post({ post }) {
  let text = post.content.text;
  let newText = text.split('\n').map((item, i) => {
    return <p key={i}>{item}</p>
  })
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-lg shadow-lg rounded-lg mx-auto mb-16">
        <div
          className="h-48 rounded-t flex-none bg-cover text-center overflow-hidden"
          style={{ backgroundImage: `url(${post.coverImage.url})` }}
          title={post.title}
        />
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {post.title}
            </div>
            <p className="text-gray-700 text-base">{post.content.text}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{post.author.name}</p>
              <p className="text-gray-600">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <Link href="/">
          <a>Back to all posts</a>
        </Link>
      </div>
    </div>
  );
};