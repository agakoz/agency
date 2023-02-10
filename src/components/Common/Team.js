import React, { Component } from "react";
import TeamMember from "./TeamMember";

import member1 from "../assets/img/team/1.jpg"
import member2 from "../assets/img/team/2.jpg"
import member3 from "../assets/img/team/3.jpg"

const teamMembers = [
    { 'name': 'Parveen Anand', 'role': 'Lead Designer', image: member1 },
    { 'name': 'Diana Petersen', 'role': 'Lead Marketer', image: member2 },
    { 'name': 'Larry Parker', 'role': 'Lead Developer', image: member3 }
];

class Team extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {
                            teamMembers.map((member, index) => {
                                return <TeamMember {...member} key={index} />
                            }
                            )
                        }

                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Team;