import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div>
      <h1>Bem vindo</h1>

      <ul>
        {posts.map((post) => (
            <li>{ post.title }</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {title: 'Primeiro post alt'},
        {title: 'Segundo post'}
      ]
    }
  }
}
