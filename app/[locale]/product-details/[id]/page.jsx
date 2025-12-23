"use client";
import { use, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import "./productDetails.css";
import Link from "next/link";
import Swiper from "swiper";
import "swiper/css";
import RelatedProjects from "@/components/inPageComponents/ProjectsPage/RelatedProjects";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import Loading from "../../../../app/[locale]/loading";
import { useTranslations } from "next-intl";

function ProductDetails({ params }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState(null);
  const [projectImgs, setProjectImgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const ImgSwiperRef = useRef(null);
  const router = useRouter();
  const { isMobile } = useMobile();
  const t = useTranslations("projects");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/API/projects.json");
        const data = await response.json();
        const foundProject = data.projects.find(
          (p) => p.id === parseInt(resolvedParams.id),
        );
        setProject(foundProject);
        setSelectedImg(foundProject.thumbnail);
        setProjectImgs(foundProject.images);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [resolvedParams.id]);

  useEffect(() => {
    if (projectImgs.length === 0) return;

    if (ImgSwiperRef.current) {
      ImgSwiperRef.current.destroy(true, true);
    }

    ImgSwiperRef.current = new Swiper(".imgsSwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: true,
      loop: projectImgs.length > 3,

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });

    return () => {
      if (ImgSwiperRef.current) {
        ImgSwiperRef.current.destroy(true, true);
      }
    };
  }, [projectImgs]);

  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return <div className="container py-5">Project not found</div>;
  }

  return (
    <>
      <section className="projectDetails py-5">
        <div className="project row justify-content-center align-items-start gap-2 m-0 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="col-11 p-0"
          >
            <button
              className="backBtn glassmorphism"
              onClick={() => router.back()}
            >
              back
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="imgSide col-11 col-md-5 p-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
              className="mainImg p-0"
            >
              <Image
                src={selectedImg}
                alt={project.title}
                width={isMobile ? 400 : 800}
                height={isMobile ? 250 : 500}
                priority
                quality={85}
              />
            </motion.div>

            <div className="thumbnailsSlider glassmorphism p-2 my-2 imgsSwiper swiper">
              <div className="swiper-wrapper">
                {projectImgs.map((img, index) => (
                  <div key={index} className="swiper-slide">
                    <Image
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      width={isMobile ? 100 : 150}
                      height={isMobile ? 70 : 100}
                      onClick={() => setSelectedImg(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="detailsSide text-start col-11 col-md-6 p-0"
          >
            <h1 className="mb-2">{project.title}</h1>
            <div className="stack my-1">
              {project.stack.map((tech) => (
                <span key={tech} className="techBadge p-1 glassmorphism">
                  {tech}
                </span>
              ))}
            </div>
            <div className="tags my-1">
              {project.tags.map((tag) => (
                <span key={tag} className="tagBadge p-1 glassmorphism">
                  {tag}
                </span>
              ))}
            </div>
            <div className="desc my-4">
              <h4>{project.description}</h4>
            </div>
            <div className="actions">
              <Link
                href={project.link}
                target="_blank"
                className="basicBtn glassmorphism p-1"
              >
                {t("live_preview")}
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="related text-center py-2 row justify-content-center align-items-center gap-2 m-0">
          <RelatedProjects
            currentProjectId={project.id}
            currentProjectTags={project.tags}
          />
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
