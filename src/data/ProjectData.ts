export interface Project {
    projectName: string,
    role: string,
    madeFor: string,
    technologies: string,
}

export const projectList: Record<string, Project> = {
    icarus: {
        projectName: "Icarus Flight Simulator",
        role: "Sole developer",
        madeFor: "Personal project",
        technologies: "C#, Unity, Aseprite, Audacity",
    }
}