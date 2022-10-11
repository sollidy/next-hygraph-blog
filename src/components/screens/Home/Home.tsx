import Link from 'next/link'
import { FC } from 'react'
import type { GetAllPostsQuery } from '../../../utils/graphql.request'
import styles from './Home.module.scss'
import { Plate } from './Plate/Plate'

export const Home: FC<GetAllPostsQuery> = ({ posts }) => {
  return (
    <main className={styles.home}>
      <div>
        {posts.map((post) => {
          return (
            <Link key={post.id} as={`/post/${post.slug}`} href="/post/[slug]">
              <a>
                <Plate post={post} />
              </a>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
