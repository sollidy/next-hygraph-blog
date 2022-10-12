import Link from 'next/link'
import { FC } from 'react'
import styles from './Post.module.scss'
import parse from 'html-react-parser'
import { GetPostBySlugQuery } from '../../../utils/graphql.request'
import { timeAgo } from '../../../utils/timeAgo'
import Image from 'next/image'

export const Post: FC<GetPostBySlugQuery> = ({ post }) => {
  if (!post) return <></>
  const parsedContent = parse(post.content.html)
  return (
    <article className={styles.post}>
      <div className={styles.postBlock}>
        <div className={styles.coverImg}>
          <Image
            src={post.coverImage?.url || ''}
            alt="Cover post"
            layout="responsive"
            width={640}
            height={360}
            style={{ borderRadius: '2px' }}
            title={post.title}
          />
        </div>
        <section className={styles.postHeader}>
          <time>{timeAgo(post.date)}</time>
          <a>Seo</a>
        </section>
        <section className={styles.postContent}>
          <div className={styles.title}>{post.title}</div>
          {parsedContent}
        </section>
        <section className={styles.postAuthor}>
          <div className={styles.img}>
            <Image
              src={post.author?.picture?.url || ''}
              alt=""
              width={50}
              height={50}
              layout="responsive"
              style={{ borderRadius: '40px' }}
            />
          </div>
          {post.author?.name}
        </section>
      </div>
      <div className="max-w-lg mx-auto">
        <Link href="/">
          <a>Back to all posts</a>
        </Link>
      </div>
    </article>
  )
}
