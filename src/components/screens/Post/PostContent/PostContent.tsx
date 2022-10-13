import { FC } from 'react'
import styles from './PostContent.module.scss'
import parse from 'html-react-parser'

interface IPostContent {
  title: string
  htmlContent: string
}

export const PostContent: FC<IPostContent> = ({ title, htmlContent }) => {
  const parsedContent = parse(htmlContent)
  return (
    <section className={styles.postContent}>
      <div className={styles.title}>{title}</div>
      {parsedContent}
    </section>
  )
}
