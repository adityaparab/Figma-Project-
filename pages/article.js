import react from "react";
import styles from '../styles/Home.module.css'
// import Image from 'next/image'
import { Container, Col, Row, fluid } from "react-bootstrap";
import Image from 'react-bootstrap/Image'



export default function article() {
    return (
        <div className={styles.ArticleDiv} >
        <Container className="g-0" fluid={true}>
        <Row className="g-0" >
        <Col md={4} sm={12}  xs={{ order: 'first'},12}  md={{ order: 'first' }}>


        


      <div className={`${styles.ArticlePhotoDiv} g-0`}  id="1"  >

       {/* Na probe */}
        <Image className={styles.bookmark2} src="/bookmark.png" alt="bookmark" width="10px" height="20px"  />
       {/* Koniec */}
      </div>
      </Col>
       
       <Col md={8} sm={12}  xs={{ order: 'second' }} >

       
       <div className={styles.ParentAuthorTopicDiv} id="2" >
       
       <div className={styles.AuthorDiv} id="4" >
       
       <p className={styles.Author}>Piotr Żelazny</p>
       <p className={styles.Time}>1 godz temu</p>

       <div className={styles.bookmarkDiv}>
        <Image className={styles.bookmark} src="/bookmark.png" alt="bookmark" width="10px" height="20px"  />
       </div>
      
       </div>
       
       
       <div className={styles.TopicDiv} id="3">
       <p className={styles.ArticleP}>
       Poprzednia dekada nalezala do Drake’a. Jak Kanadyjczyk wplynal muzyke popularna?
       </p>  
       <button className={styles.button1}>HIP-HOP</button>
       </div>
       
           
       </div>
       
       </Col>
       </Row>
       </Container>
      </div>
    )
  }