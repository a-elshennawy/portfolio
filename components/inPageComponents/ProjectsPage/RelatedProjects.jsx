"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import { motion } from "motion/react";

function RelatedProjects({ currentProjectId, currentProjectTags }) {
  const [relatedProjects, setRelatedProjects] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { isMobile } = useMobile();

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

  return (
    <>
      <h3 className="mb-2">similar projects</h3>
      {relatedProjects.map((project) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: project.id * 0.1,
            ease: "easeInOut",
          }}
          key={project.id}
          className="projectCard glassmorphism col-10 col-md-3 p-0 m-0"
        >
          <span
            className="glassmorphism toProdDetailsBtn p-1"
            onClick={() => toProductDetails(project.id)}
          >
            <FaArrowUpRightFromSquare />
          </span>
          <div className="p-0 img">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={500}
              height={isMobile ? 250 : 350}
              priority
              loading="eager"
              quality={85}
              onClick={() => toProductDetails(project.id)}
            />
          </div>
          <div className="py-2 px-1 details">
            <h3 className="mb-2">{project.title}</h3>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag glassmorphism p-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default RelatedProjects;
