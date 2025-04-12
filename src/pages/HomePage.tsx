import { FrameworkSection } from "../components/FrameworkSection";
import { Jumbotron } from "../components/Jumbotron";
import { ProjectSection } from "../components/ProjectSection";

export function HomePage() {
    return (
        <>
            <Jumbotron />
            <FrameworkSection />
            <ProjectSection />
        </>
    )
}