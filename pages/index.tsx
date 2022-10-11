import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../src/utils/graphql.request'
import { NextPage, InferGetStaticPropsType } from 'next'
import { Home } from '../src/components/screens/Home/Home'

const graphcms = new GraphQLClient(process.env.GQL_API_URL || '')
const sdk = getSdk(graphcms)

export const getStaticProps = async () => {
  try {
    const { posts } = await sdk.GetAllPosts()
    return { props: { posts } }
  } catch (e) {
    return {
      props: {},
      notFound: true,
    }
  }
}
const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  if (!posts) return <></>
  return <Home posts={posts} />
}
export default HomePage
