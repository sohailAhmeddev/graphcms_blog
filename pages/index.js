import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components'

import { getPosts } from '../services'
// const posts = [
//   {
//     title: "React Testing", excerpt: "Learn More about testing",
//   },
//   {
//     title: "React With tailwinf", excerpt: "Learn More about testing",
//   },
// ]

const Home = ({ posts }) => {
  console.log(posts, 'posts')
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {/* <PostCard post={post} key={post.title} /> */}
          {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}