import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div>
      <h1>Bem vindo</h1>

      <ul>
        {posts.map((post) => (
            <li key={post.id}>{ post.title }</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {id: 1, title: 'Primeiro post alt'},
        {id: 2, title: 'Segundo post'}
      ]
    }
  }
}
