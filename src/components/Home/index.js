import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', 'S', 'a', 'h', 'a', 'y']
  const nameArray1 = ['o', 'h', 'a', 'n']
  const jobArray = [
    'f',
    'u',
    'l',
    'l',
    '-',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>e</span>
            <span className={letterClass}>l</span>
            <span className={letterClass}>l</span>
            <span className={`${letterClass} _12`}>o!</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>

            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
              className="text-icon"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray1}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full-stack web Developer / Smart contract developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
