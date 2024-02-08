import { useEffect, useState } from 'react'
import {
  faAngular,
  faAws,
  faCss3,
  faDocker,
  faEthereum,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Dedicated software developer with a strong interest in blockchain technology and creating full-stack web applications. I'm quite self-assured, curious, and constantly trying to get better at solving problems one at a time.
          </p>
          <p align="LEFT">
            My coding journey began in my first year of my college, BITS Goa, when I joined the <a href='https://fest.devsoc.club/'>DevSoc</a> as an App developer. I participated in hackathons, worked on multiple projects, and eventually rose to the position of core member there.  
          </p>
          <p>
          Later on, I developed my full-stack web programming skills because I was interested in learning more about web3 technologies. Building something is always enjoyable, whether it's a web application or experimenting with NFTs and smart contracts XD I have experience working on many projects for internships and businesses.Besides being a final-year BITS Goa Computer Science student right now, I also work on side projects and freelancing jobs.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faEthereum} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGithub} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDocker} color="#EC4D28" />
            </div>                     
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
