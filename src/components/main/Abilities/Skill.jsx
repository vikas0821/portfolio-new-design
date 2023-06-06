import React from 'react'
import Content from './Content'
import "./skill.css"

function Skill(props) {
  return (
    <div className="skill_box" >
      <div className="left_skill">
        <Content contentTitle="Coding"/>
      </div>
      <div className="right_skill">
        <Content contentTitle="Languages"/>
        <Content contentTitle="Tools / Others"/>
      </div>
    </div>
  )
}

export default Skill
