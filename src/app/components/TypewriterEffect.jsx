import React from 'react'
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
    onInit={(typewriter) => {
        typewriter
            .typeString("Mechanical Engineer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Web Developer")
            .start();
    }}
/>
  )
}

export default TypewriterEffect