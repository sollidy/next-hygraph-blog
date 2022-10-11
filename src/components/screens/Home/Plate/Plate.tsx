import Image from 'next/image'
import { FC } from 'react'
import styles from './Plate.module.scss'
import samplePhoto from '../../../../assets/img/no-photo.png'

import type { GetAllPostsQuery } from '../../../../utils/graphql.request'
interface IPlate {
  post: GetAllPostsQuery['posts'][number]
}

export const Plate: FC<IPlate> = ({ post }) => {
  return (
    <div className={styles.plate}>
      <div className={styles.content}>
        <h2>{post.title}</h2>
        <span>{post.author?.name}</span>
        <time>{post.date}</time>
      </div>
      <div className={styles.img}>
        <Image
          src={post.coverImage?.url ?? samplePhoto}
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
