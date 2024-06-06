import Link from "next/link"
import { getPosts } from "./backend"

export default async function Page() {
  const posts = [
    ...await getPosts()
  ]

  //   const post = await getPost('creating-learning-platform-nextjs-13-app-router')
  
  return (
    <>
     <section className="section-centered" id="beta">
        <h3>Blog</h3>
        <h2>Explore insights and news</h2>
        <p style={{maxWidth: '500px'}}>
          Stay updated on what happens at Hology Interactive, new feature updates, guides and industry insights.
        </p>

      </section>

      <section className="post-links " id="download">
        {posts.map(post => {
          return <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="post-link">
              <img src={post.coverImage?.url} width={200} alt="" />
              <small>{formatDate(post.createdAt)}</small>
              <h4>{post.title}</h4>
            </div>
          </Link>
        })}
      </section>
    </>
  )
}

function formatDate(date: string) {
  return new Date(date).toDateString()
}

export const metadata = {
  title: 'Hology Engine Blog',
  description: 'Stay updated on what happens at Hology Interactive, new feature updates, guides and industry insights.'
}
