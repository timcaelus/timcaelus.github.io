import { projectList } from "@/data/ProjectData";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <main>
            <div id="projects-container">
                {
                    Object.entries(projectList).map(([key, value]) => (
                        <div key={key}>
                            {ProjectCard(value, key)}
                        </div>
                    ))
                }
            </div>
        </main>
    );
}