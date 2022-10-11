import { gql, GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import parse from 'html-react-parser'

import { getSdk } from '../../src/utils/graphql.request'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const graphcms = new GraphQLClient(process.env.GQL_API_URL || '')
const sdk = getSdk(graphcms)

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  try {
    const { post } = await sdk.GetPostBySlug({ slug: String(params?.slug) })
    return {
      props: {
        post,
      },
    }
  } catch {
    return { props: {}, notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await sdk.GetAllPosts()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  if (!post) return <></>
  const parsedContent = parse(post.content.html)
  let text = post.content.text
  let newText = text.split('\\n').map((item, i) => {
    return <p key={i}>{item}</p>
  })
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-lg shadow-lg rounded-lg mx-auto mb-16">
        <div
          className="h-48 rounded-t flex-none bg-cover text-center overflow-hidden"
          style={{ backgroundImage: `url(${post.coverImage?.url})` }}
          title={post.title}
        />
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {post.title}
            </div>
            {/* <div>{newText}</div> */}
            {parsedContent}
            {/* <p className="text-gray-700 text-base">{newText}</p> */}
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{post.author?.name}</p>
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
  )
}

export default Post
