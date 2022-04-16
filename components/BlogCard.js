import styles from "../styles/BlogCard.module.css";
import moment from "moment";
import Link from "next/link";

function BlogPost({ title, author, coverPhoto, datePublished, slug }) {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <img src={coverPhoto.url} alt="" />
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <img src={author.avatar.url} alt={author.name} />
            <h5>{author.name}</h5>
          </div>
          <div className={styles.date}>
            <h5>{moment(datePublished).format("MMMM d, YYYY")}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogPost;
