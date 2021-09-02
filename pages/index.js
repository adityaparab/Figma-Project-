import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Article from './/article.js'

// This is for React bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div >

     <Article/>
     <Article/>
     <Article/>
      
    </div>
  )
}
