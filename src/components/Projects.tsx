"use client"

import React, { FC } from "react";
import Project from "./ui/ProjectCard";
import SearchBar from "./ui/SearchBar";
import Button from "./ui/Button";
import { Code, Code2 } from "lucide-react";
import { Server } from "lucide-react";

interface ProjectsProps {};

const Projects:FC<ProjectsProps> = (props) => {
    return <div className="min-h-screen">

    <header className="w-full bg-white sticky top-20 left-0 h-16 flex items-center justify-between pl-16 pr-16 pt-2 pb-2 ">
        <SearchBar/>
        <div className="flex items-center h-full w-auto gap-6">
            Filter BY
            <Button variant="outlined" className="text-indigo-700">
                <span>Frontend</span>
                <Code className="w-4 h-4"/>
            </Button>
            <Button variant="outlined" className="text-indigo-700">
                <span>Backend</span>
                <Server className="w-4 h-4"/>
            </Button>
            <Button variant="outlined" className="text-indigo-700 group-hover:text-black">
                <span className="group">Fullstack</span>
                <Code2 className="w-4 h-4 group"/>
            </Button>
        </div>
    </header>

        <main className="flex flex-wrap gap-4 justify-between pt-10 pl-16 pr-16">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </main>
    </div>
};

export default Projects;