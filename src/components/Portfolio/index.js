import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [workEx, setWorkEx] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    getWorkEx()
    getProjects()
  }, [])

  const getWorkEx = async () => {
    const querySnapshot = await getDocs(collection(db, 'workEx'))
    setWorkEx(querySnapshot.docs.map((doc) => doc.data()))
  }

  const getProjects = async () => {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    setProjects(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderWorkEx = (workEx) => {
    return (
      <div className="images-container">
        {workEx.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Work Experience'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderWorkEx(workEx)}</div>
        <h1 className="page-title1">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderWorkEx(projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
