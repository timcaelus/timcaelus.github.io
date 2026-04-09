import type { Project } from "@/data/ProjectData";

export default function ProjectCard(project: Project, id: string) {
    return (
        <div className="project-card">
            <img src={`src/assets/project-images/${id}.png`} />
            <h3> { project.projectName } </h3>
            <p className="faint"> { project.madeFor } </p>
            <hr className="rounded" />
            <p> { project.technologies } </p>
            <p> { project.role } </p>
        </div>
    );
}