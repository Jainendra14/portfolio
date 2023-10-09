import React from "react";
import { IoIosContacts } from "react-icons/io"
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate"
import './style.scss'

const Contact = () => {
    // const submitHandler=(e)=>{
    //     e.preventDefault();
    //     e.action="https://formsubmit.co/bbbda651b0c39903033b814375b27efa"
    //     e.target="_blank"
    // }
    return (
        <section id="contact" className="contact">

            < PageHeaderContent
                headerText="My Contact"
                icon={<IoIosContacts size={40} />}
            />
            <div className="contact_content">
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
                    <h3 className="contact_content_header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                    //  onSubmit={submitHandler} 
                >   <form action="https://formsubmit.co/bbbda651b0c39903033b814375b27efa" target="_blank" method="POST">
                    <div className="contact_content_form">
                        <div className="contact_content_form_controlswrapper">
                            <div>
                                <input required name="name" className="inputName" type={"text"} />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input required name="email" className="inputEmail" type={"email"} />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea required name="description" className="inputDescription" type={"text"} rows="5" />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                    </form>


                </Animate>

            </div>

        </section>
    )
}

export default Contact; 