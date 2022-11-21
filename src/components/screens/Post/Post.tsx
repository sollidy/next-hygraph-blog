import { FC } from 'react'
import styles from './Post.module.scss'
import { GetPostBySlugQuery } from '../../../shared/graphql.request'
import { timeAgo } from '../../../utils/timeAgo'
import Image from 'next/image'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useRouter } from 'next/router'
import { PostContent } from './PostContent/PostContent'

export const Post: FC<GetPostBySlugQuery> = ({ post }) => {
  const { push } = useRouter()
  if (!post) return <></>
  return (
    <article className={styles.post}>
      <div className={styles.postBlock}>
        <div className={styles.coverImg}>
          <Image
            src={post.coverImage?.url || ''}
            alt="Cover post"
            width={900}
            height={360}
            style={{ borderRadius: '2px' }}
            title={post.title}
            priority
          />
        </div>
        <section className={styles.postHeader}>
          <time>{timeAgo(post.date)}</time>
          <a>Seo</a>
        </section>
        <PostContent htmlContent={post.content.html} title={post.title} />
        <section className={styles.postAuthor}>
          <div className={styles.img}>
            <Image
              src={post.author?.picture?.url || ''}
              alt=""
              width={50}
              height={50}
              style={{ borderRadius: '40px' }}
            />
          </div>
          {post.author?.name}
        </section>
      </div>
      <div className={styles.backButton} onClick={() => push('/')}>
        <MdArrowBackIosNew />
        <span>Back to all posts</span>
      </div>
    </article>
  )
}
