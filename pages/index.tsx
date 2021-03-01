import Head from 'next/head'
import { stringify } from 'querystring';
// import styles from '../styles/Home.module.css'
import MyApp from './_app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Currency App on Nexst</title>
      </Head>
      <h1>Currency App</h1>
    </div>
  )
}
