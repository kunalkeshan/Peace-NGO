import Link from "next/link";
import React from "react";
import TeamMemberCard from "../cards/TeamMember";

const Teams = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
    return (
        <div className="w-full h-full bg-white py-12 md:py-16">
            <div className="">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Our Teams
                </h2>
                <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 lg:max-w-none">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member._id} member={member}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;
