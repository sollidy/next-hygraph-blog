import Head from 'next/head'
import { FC } from 'react'
import type { GetAllPostsQuery } from '../../../shared/graphql.request'
import styles from './Home.module.scss'
import { Plate } from './Plate/Plate'

export const Home: FC<GetAllPostsQuery> = ({ posts }) => {
  const firstPosts = posts.slice(0, 2)
  const lastPosts = posts.slice(2)
  return (
    <>
      <Head>
        <title itemProp="headline">Simple graphQl blog</title>
        <meta
          itemProp="description"
          name="description"
          content="Next.js blog with Graph CMS"
        />
      </Head>
      <main className={styles.home}>
        <div className={styles.gridWrap}>
          {firstPosts.map((post) => {
            return (
              <div key={post.id} className={styles.mainGrid}>
                <Plate post={post} />
              </div>
            )
          })}
          {lastPosts.map((post) => {
            return (
              <div key={post.id} className={styles.secondGrid}>
                <Plate post={post} />
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
