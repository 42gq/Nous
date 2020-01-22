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
var str = `document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});`
const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default function Nous() {
  return (
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      console.log(42)
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
      <Layout>
        <Landing />
      </Layout>
  )
}
