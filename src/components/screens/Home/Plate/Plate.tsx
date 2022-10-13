import Image from 'next/image'
import { FC } from 'react'
import styles from './Plate.module.scss'
import samplePhoto from '../../../../assets/img/no-photo.png'

import type { GetAllPostsQuery } from '../../../../shared/graphql.request'
import Link from 'next/link'
interface IPlate {
  post: GetAllPostsQuery['posts'][number]
}

export const Plate: FC<IPlate> = ({ post }) => {
  return (
    <Link as={`/post/${post.slug}`} href="/post/[slug]">
      <a>
        <div className={styles.plate}>
          <div className={styles.content}>
            <h2>
              <span>{post.title}</span>
            </h2>
            {/* <span>{post.author?.name}</span> */}
            <time>{post.date}</time>
          </div>
          <div className={styles.img}>
            <Image
              src={post.coverImage?.url ?? samplePhoto}
              alt="Post cover"
              layout="responsive"
              objectFit="cover"
              width={640}
              height={360}
              style={{ borderRadius: '2px' }}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}
