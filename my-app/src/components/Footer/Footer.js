import React from 'react'
import styles from '../Footer/Footer.module.css'

function Footer({name}) {
  return (
    <div className={styles.footer}>Footer {name}</div>
  )
}

export default Footer