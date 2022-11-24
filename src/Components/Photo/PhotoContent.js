import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import PhotoComments from './PhotoComments'
import styles from "./PhotoContent.module.css"
import PhotoDelete from './PhotoDelete'
import Image from '../Helper/Image'

const PhotoContent = ({data}) => {
  const user = React.useContext(UserContext)
  const {photo, comments} = data
  return (
    <section className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <div>
          <p>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id}/> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
            <span className={styles.visualizacoes}>
              {photo.acessos}
            </span>
          </p>
          <h1 className={`title`}>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.atributos}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </section>
  )
}

export default PhotoContent