import { getPost, getPosts } from "../backend"

export default async function Page({ params }: { params: { slug: string } }) {

  const post = await getPost(params.slug)
/*  post.content.html = post.content.html
    .replaceAll(/width="\d+"/g, '')
    .replaceAll(/height="\d+"/g, '')*/

  const created = new Date(post.createdAt).toDateString()

  return (
    <>
      <article className="">
        <small>{created}</small>
        <h1>{post.title}</h1>

        <img src={post.coverImage.url} className="cover" alt="" />
        <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        
      </article>
    </>
  )
}
// <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>


// or Dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt
  }
}


export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(({slug}) => ({slug}))
}