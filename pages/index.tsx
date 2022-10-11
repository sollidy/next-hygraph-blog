import { GraphQLClient } from 'graphql-request'
import { GetAllPostsQuery, getSdk } from '../src/utils/graphql.request'
import { NextPage } from 'next'
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

const HomePage: NextPage<GetAllPostsQuery> = ({ posts }) => {
  return <Home posts={posts} />
}
export default HomePage
