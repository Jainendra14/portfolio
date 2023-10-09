import React from "react";
import {data} from "./utils";
import { RiBriefcase4Fill } from "react-icons/ri"
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import './style.scss';
import {MdWork} from "react-icons/md";
const Resume = () => {
    return (
        <section id="resume" className="resume">

            < PageHeaderContent
                headerText="My Resume"
                icon={<RiBriefcase4Fill size={40} />}
            />
            <div className="timeline">
                <div className="timeline_Experience">
                    <h3 className="timeline_Experience_header-text">Experience</h3>
                    <VerticalTimeline
                        layout="{1-column}"
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement 
                                key={i}
                                className="timeline_expeience_vertical-timeline-element"
                                contentStyle={{
                                    background:'none',
                                    color:'var(--yellow-theme-sub-text-color)',
                                    border:'1.5px solid var(--yellow-theme-main-color)'
                                    
                                }}
                               
                                icon={<MdWork/>}
                                iconStyle={{

                                    background:'#181818',
                                    color:'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                       
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className="timeline_Education">
                    <h3 className="timeline_Experience_header-text"> Education</h3>
                    <VerticalTimeline
                        layout="{1-column}"
                        lineColor="var(--yellow-theme-main-color)"
                      >
                        {
                            data.Education.map((item, i) => (
                                <VerticalTimelineElement 
                                key={i}
                                className="timeline_expeience_vertical-timeline-element"
                                contentStyle={{
                                    background:'none',
                                    color:'var(--yellow-theme-sub-text-color)',
                                    border:'1.5px solid var(--yellow-theme-main-color)',
                                }}
                               
                                icon={<MdWork/>}
                                iconStyle={{

                                    background:'#181818',
                                    color:'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}

                                        </h3>
                                        
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                       
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                    <p>{item.date}</p>

                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>


            </div>

        </section>
    )
}
export default Resume;