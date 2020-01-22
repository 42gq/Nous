import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Landing from '../components/Landing.js'
import Head from 'next/head'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}
// const PostLink = ({ post }) => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a>{post.title}</a>
//     </Link>
//   </li>
// )

export default function Nous() {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>NOUS</title>
        <link href="/static/styles2.css" rel="stylesheet" />
        <script type="text/javascript" src="/static/smooth.js"></script>
      </Head>
      <Landing />
    </Layout>
  )
}
