import React from "react";
import { FaEmpire } from "react-icons/fa"
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate"
import { skillsData } from "./utils";
import './style.scss';


const Skill = () => {
    return (
        <section id="skill" className="skill">

            < PageHeaderContent
                headerText="My Skill"
                icon={<FaEmpire size={40} />}
            />
            {/* <div className="skill_content-wrapper">
            {
            skillsData.map((item, i) => (
                <div key={i} className="skill_content-wrapper_inner-content">
                    <Animation
                     play
                     duration={1}
                     delay={0.3}
                     start={{
                        transform:'translateX(-200px)'
                     }}
                     end={{
                        transform:'translateX(0px)'
                     }}

                    >
                        <h3 className="skill_content-wrapper_inner-content_category-text">{item.label}</h3>
                     <div>
                        {item.data.map((skillItem, j) => (
                            <Animation
                             play
                             duration={1}
                             keyframs={["opacity :1", "opacity :0"]}
                             iterationCount ="1"
                            >
                                <div className="progressbar-wrapper" key={j}>
                                    <p>{skillItem.skillName}</p>

                                </div>

                            </Animation>
                        ))
}
                     </div>
                    </Animation>
                </div>
            ))
            }

        </div> */}
            <div className="skill_container">
                {

                    skillsData.map((item, i) => (
                        <div className="skill_container_wrapper" key={i}>
                            <div className="skill_container_wrapper-contain">
                                <Animate
                                    play
                                    duration={1}
                                    delay={0}
                                    start={{
                                        transform: "translateX(-200px)"
                                    }}
                                    end={{
                                        transform: "translateX(0px)"
                                    }}
                                >

                                    <h3 className="skill_container_heading">{item.label}</h3>
                                </Animate>
                            </div>
                            <div>
                                <ul className="skill_container_item">
                                    <li>{item.data.map((skill, j) => (
                                        <div className="skill_container-item_element" key={j}>
                                            <Animate
                                                play
                                                duration={1}
                                                delay={0}
                                                start={{
                                                    transform: "translateX(-200px)"
                                                }}
                                                end={{
                                                    transform: "translateX(0px)"
                                                }}
                                            >
                                                <p>{skill.skillName}</p>
                                            </Animate>
                                        </div>

                                    ))}</li>
                                    <br></br>
                                </ul>
                            </div>
                        </div>

                    ))
                }
            </div>

        </section>
    )

}

export default Skill;