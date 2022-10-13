import { GraphQLClient } from 'graphql-request'
import { GetPostBySlugQuery, getSdk } from '../../src/shared/graphql.request'
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next'
import { Post } from '../../src/components/screens/Post/Post'

const graphcms = new GraphQLClient(process.env.GQL_API_URL || '')
const sdk = getSdk(graphcms)

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  try {
    const { post } = await sdk.GetPostBySlug({ slug: String(params?.slug) })
    return { props: { post } }
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

const PostPage: NextPage<GetPostBySlugQuery> = ({ post }) => {
  return <Post post={post} />
}

export default PostPage
