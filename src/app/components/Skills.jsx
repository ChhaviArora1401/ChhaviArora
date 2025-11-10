import React from 'react'
import { skills } from '../utils/data'

const ToolKit = () => {
  return (
    <section className='py-20 skills dark:bg-black dark:text-white'>
      <h1 className='text-3xl text-center font-bold mb-8'>Skills</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-hover flex flex-col items-center gap-2 cursor-pointer"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain skill-icon opacity-80 transition-all duration-300" />

            <p
              className="skill-name opacity-80 transition-opacity duration-300 text-sm text-zinc-800 dark:text-zinc-200 ">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ToolKit