"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";

function RelatedProjects({ currentProjectId, currentProjectTags }) {
  const [relatedProjects, setRelatedProjects] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const { isMobile } = useMobile();
  const t = useTranslations("projects");

  useEffect(() => {
    if (!currentProjectTags || currentProjectTags.length === 0) {
      setLoading(false);
      return;
    }

    fetch("/API/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const related = data.projects
          .filter((project) => {
            if (project.id === currentProjectId) return false;
            return project.tags.some((tag) => currentProjectTags.includes(tag));
          })
          .sort((a, b) => {
            const aMatches = a.tags.filter((tag) =>
              currentProjectTags.includes(tag),
            ).length;
            const bMatches = b.tags.filter((tag) =>
              currentProjectTags.includes(tag),
            ).length;
            return bMatches - aMatches;
          })
          .slice(0, 3);

        setRelatedProjects(related);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching related projects:", error);
        setLoading(false);
      });
  }, [currentProjectId, currentProjectTags]);

  if (loading) {
    return <div className="container py-3">Loading related projects...</div>;
  }

  if (relatedProjects.length === 0) {
    return null;
  }

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
      <h3 className="mb-2">{t("similar")}</h3>
      {relatedProjects.map((project) => {
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
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
                </motion.div>
              </AnimatePresence>
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
      })}
      )
    </>
  );
}

export default RelatedProjects;
