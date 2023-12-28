import React from 'react'
import styles from './MyError.module.css'

const MyError = (props) => {
  return (
    <div className={`${styles.mainContainer}`}>{props.children}</div>
  )
}

export default MyError