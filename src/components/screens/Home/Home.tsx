import Link from 'next/link'
import { FC } from 'react'
import type { GetAllPostsQuery } from '../../../utils/graphql.request'
import styles from './Home.module.scss'
import { Plate } from './Plate/Plate'

export const Home: FC<GetAllPostsQuery> = ({ posts }) => {
  const firstPosts = posts.slice(0, 2)
  const lastPosts = posts.slice(2)
  return (
    <main className={styles.home}>
      <div className={styles.gridWrap}>
        {firstPosts.map((post) => {
          return (
            <div key={post.id} className={styles.mainGrid}>
              <Link as={`/post/${post.slug}`} href="/post/[slug]">
                <a>
                  <Plate post={post} />
                </a>
              </Link>
            </div>
          )
        })}
        {lastPosts.map((post) => {
          return (
            <div key={post.id} className={styles.secondGrid}>
              <Link as={`/post/${post.slug}`} href="/post/[slug]">
                <a>
                  <Plate post={post} />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}
