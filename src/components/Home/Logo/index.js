import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const outlineLogoRef1 = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef1.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(-35 594) scale(.115 -.115)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M2101 4870 c-107 -27 -198 -47 -202 -44 -4 2 -10 0 -14 -6 -4 -6 -10
-8 -14 -6 -13 8 -1198 -291 -1233 -311 -19 -10 -43 -38 -55 -63 l-23 -44 0
-1896 0 -1896 22 -44 c13 -25 37 -53 55 -63 26 -15 1190 -312 1263 -322 14 -2
27 -4 30 -5 3 -2 8 -2 11 -2 4 1 87 -19 185 -43 197 -49 234 -53 295 -29 38
16 43 16 75 0 57 -27 134 -20 324 28 96 25 178 42 182 40 4 -3 14 -2 20 2 7 5
19 9 28 9 54 5 298 72 324 90 17 11 41 40 54 62 l23 42 63 -6 c50 -4 72 -1
108 14 39 18 48 19 69 7 51 -28 148 -17 411 48 269 66 296 78 324 145 12 26
14 197 14 947 l0 914 -32 48 c-36 54 -73 72 -145 73 l-43 1 0 134 0 133 57 7
c63 7 112 38 144 90 18 30 19 60 19 749 0 584 -3 724 -14 750 -27 66 -56 79
-307 141 -129 32 -416 103 -639 158 -223 55 -415 100 -428 100 -12 0 -25 4
-28 9 -2 4 -11 6 -18 3 -8 -3 -17 0 -21 5 -3 6 -10 9 -15 6 -4 -3 -79 13 -165
35 -173 44 -254 50 -309 24 -32 -16 -37 -16 -75 0 -62 24 -107 19 -320 -34z
m269 -2371 l0 -2281 -22 6 c-71 19 -1168 290 -1243 307 -111 24 -389 91 -393
94 -3 2 -3 3748 0 3750 2 2 66 17 143 35 221 51 1480 362 1484 366 31 29 31
30 31 -2277z m847 2122 c610 -150 983 -238 1046 -249 15 -2 27 -7 27 -11 0 -3
1 -314 3 -690 l2 -683 -72 4 c-46 3 -82 0 -103 -8 -53 -23 -60 -56 -60 -291 0
-190 2 -211 20 -241 26 -42 54 -52 143 -52 l72 0 -2 -877 c-2 -482 -6 -880
-10 -884 -12 -10 -477 -119 -509 -119 -12 0 -14 132 -14 795 l0 795 -29 32
-29 32 -98 -2 c-184 -4 -242 -12 -275 -39 l-29 -25 0 -853 c0 -804 -1 -854
-17 -859 -25 -7 -715 -176 -719 -176 -2 0 -4 1026 -4 2280 0 1254 2 2280 4
2280 3 0 296 -72 653 -159z m353 -3381 c0 -689 -1 -730 -17 -729 -10 1 -28 4
-41 7 l-23 7 -2 723 -2 722 43 0 42 0 0 -730z"
          />
          <path
            ref={outlineLogoRef1}
            d="M3331 3874 l-31 -26 0 -478 0 -478 29 -25 c31 -26 98 -36 256 -38
112 -1 115 0 146 30 l29 29 0 454 c0 487 1 481 -51 508 -17 10 -285 50 -331
50 -9 0 -30 -12 -47 -26z m239 -535 l0 -309 -42 0 -43 0 2 307 1 308 34 6 c18
3 36 3 41 1 4 -2 7 -142 7 -313z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
