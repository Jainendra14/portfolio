import React from "react";
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiAndroid, DiReact } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetailsa = [
    {
        lable: "Name",
        value: "Jainendra Singh"
    },
    {
        lable: "Age",
        value: "23"
    },
    {
        lable: "Address",
        value: "Bengaluru"
    },
    {
        lable: "Email",
        value: "Jainendrasingh549gmail.com"
    },
    {
        lable: "Contact No",
        value: "+91 7651811927"
    },
]

const jobSummary = 'Seasoned and independent fron end developer with Front end developers understand the importance of user experience and whether its for a web or mobile app, creating clean, user-friendly interfaces is what they do best. As a frontend developer, your resume should have a lot in common with your code. Structured, well-organized, and tailored to the needs and wants of the audience you\'re building it for.'



const About = () => {
    return (
        <section id="about" className="about">

            < PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about_contact">
                <div className="about_contact_personalWrapper"> <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translate(-900px)",
                    }}
                    end={{
                        transform: "translate(0px)",
                    }}
                >

                    <h3>Front End Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translate(550px)", }}
                        end={{
                            transform: "translate(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetailsa.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{`${item.lable}  : `}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate></div>
                <div className="about_contact_serviceWrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translate(600px)", }}
                        end={{
                            transform: "translate(0px)"
                        }}
                        >
                    <div className="about_contact_serviceWrapper_innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiReact size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                  


                </div>


            </div>



        </section>
    )
}

export default About



