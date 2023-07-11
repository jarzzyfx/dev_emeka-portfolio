"use client"

import React, { FC } from "react";

interface ProjectProps {
    _id?: Number
    img?: string
    titlle?: string
    githubHref?: string
    websiteHref? : string
    shortdesc?: string
    longdesc?: string
};

const Project:FC<ProjectProps> = (props) => {
    return <div className="w-[260px] h-[420px] bg-slate-500 rounded-sm">
            Projects
    </div>
};

export default Project;