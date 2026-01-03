"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import Loading from "../../../app/[locale]/loading";
import { useTranslations } from "next-intl";

function ProjectsComponent() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const router = useRouter();
  const { isMobile } = useMobile();
  const t = useTranslations("projects");

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/API/projects.json");
        const data = await response.json();
        const shuffledProjects = shuffleArray(data.projects || []);
        setProjects(shuffledProjects);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const toProductDetails = (id) => {
    router.push(`/product-details/${id}`);
  };

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        projects.map((project) => {
          const isHovered = hoveredProject === project.id;
          const displayImage =
            isHovered && project.images?.[0]
              ? project.images[1]
              : project.thumbnail;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: project.id * 0.1, ease: "easeOut" }}
              key={project.id}
              className="projectCard glassmorphism col-10 col-md-5 col-lg-3 p-0 m-0"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="glassmorphism toProdDetailsBtn p-1"
                onClick={() => toProductDetails(project.id)}
              >
                <FaArrowUpRightFromSquare />
              </span>
              <div className="p-0 img">
                <Image
                  src={displayImage}
                  alt={t(project.title)}
                  width={500}
                  height={isMobile ? 150 : 300}
                  priority
                  loading="eager"
                  quality={85}
                  onClick={() => toProductDetails(project.id)}
                />
              </div>
              <div className="py-2 px-1 details">
                <h3 className="mb-2">{t(project.title)}</h3>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag glassmorphism p-1">
                      {t(tag)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </>
  );
}

export default ProjectsComponent;
