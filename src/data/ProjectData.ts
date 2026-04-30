export interface Project {
    projectName: string,
    role: string,
    madeFor: string,
    technologies: string,
}

export const projectList: Record<string, Project> = {
    epicycle: {
        projectName: "Epicycle",
        role: "Sole programmer and lead designer",
        madeFor: "Personal project",
        technologies: "C#, Godot, Aseprite, Audacity, MuseScore",
    },
    icarus: {
        projectName: "Icarus Flight Simulator",
        role: "Sole developer",
        madeFor: "Personal project",
        technologies: "C#, Unity, Aseprite, Audacity",
    },
    tempor: {
        projectName: "Tempor",
        role: "Sole developer",
        madeFor: "Personal project",
        technologies: "React, TypeScript, MongoDB, SuperTokens, HTML/CSS",
    },
    udig: {
        projectName: "United for Decency in Government Website",
        role: "Full-stack developer and team lead",
        madeFor: "United for Decency in Government",
        technologies: "React, TypeScript, MongoDB, Tailwind, HTML/CSS",
    },
    bpwebsite: {
        projectName: "brokenpendulum.com",
        role: "Sole developer",
        madeFor: "Personal project",
        technologies: "React, TypeScript, Tailwind, HTML/CSS",
    }
}