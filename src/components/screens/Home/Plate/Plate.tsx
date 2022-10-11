import Image from 'next/image'
import { FC } from 'react'
import styles from './Plate.module.scss'

import type { GetAllPostsQuery } from '../../../../utils/graphql.request'
interface IPlate {
  post: GetAllPostsQuery['posts'][number]
}

export const Plate: FC<IPlate> = ({ post }) => {
  if (!post.coverImage) return <></>
  return (
    <div className={styles.plate}>
      <div className={styles.content}>
        <h2>{post.title}</h2>
        <span>{post.excerpt}</span>
      </div>
      <div className={styles.img}>
        <Image
          src={post.coverImage?.url}
          alt=""
          width={640}
          layout="responsive"
          objectFit="cover"
          height={360}
        />
      </div>
    </div>
  )
}
