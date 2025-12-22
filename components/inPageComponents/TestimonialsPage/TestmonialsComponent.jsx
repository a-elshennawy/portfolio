"use client";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { supabase } from "@/components/lib/supabaseClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CircularProgress } from "@mui/material";
import Loading from "@/app/loading";
import CustomeComponent from "@/components/CustomeComponent/CustomeComponent";
import useMobile from "@/hooks/useMobile";
import { TbXboxXFilled } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

function TestmonialsComponent() {
  const [value, setValue] = React.useState(3.5);
  const [hover, setHover] = React.useState(-1);
  const [testimonials, setTestimonials] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [customerName, setCustomerName] = React.useState("");
  const [testmonialText, setTestmonialText] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const { isMobile } = useMobile();

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setTestimonials(data || []);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchTestimonials();
    const channel = supabase
      .channel("testimonials_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "testimonials" },
        () => fetchTestimonials(),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSending(true);

    try {
      if (!customerName.trim() || !testmonialText.trim()) {
        setError("Please fill in all fields");
        setSending(false);
        setTimeout(() => setError(null), 3000);
        return;
      }

      const { error } = await supabase.from("testimonials").insert([
        {
          name: customerName.trim(),
          note: testmonialText.trim(),
          rate: value,
        },
      ]);

      if (error) throw error;

      setSuccess("Thanks for your review!");
      setCustomerName("");
      setTestmonialText("");
      setValue(3.5);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "An error occurred");
      setTimeout(() => setError(null), 3000);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            className="submitToast glassmorphism errorToast p-2"
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {error} <TbXboxXFilled />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {success && (
          <motion.div
            className="submitToast glassmorphism sucessToast p-2"
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {success} <FaCheckCircle />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Slider Section */}
      <motion.div
        className="col-11 col-md-8 p-0 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        {loading && <Loading />}

        {!loading && testimonials.length === 0 ? (
          <CustomeComponent
            imgSrc={"/avatar/bored.webp"}
            imgWidth={isMobile ? 300 : 500}
            imgHeight={isMobile ? 250 : 400}
            text="no reviews yet, be the first"
          />
        ) : (
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            loop={testimonials.length > 3}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="reviewItem text-center glassmorphism py-3 px-2">
                  <h4 className="mb-1">{testimonial.name}</h4>
                  <Rating
                    value={testimonial.rate || 0}
                    precision={0.5}
                    size="large"
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <h5 className="mt-1">{testimonial.note}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
        className="col-11 col-md-3"
      >
        <form
          onSubmit={handleSubmit}
          className="glassmorphism text-center p-3 row justify-content-center align-items-center gap-1"
        >
          <h3>Submit a Review</h3>
          <div className="inputContainer col-12 p-0">
            <input
              type="text"
              className="glassmorphism"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              disabled={sending}
              placeholder="enter your name..."
            />
          </div>

          <div className="inputContainer py-2 col-12">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                size="large"
                onChange={(event, newValue) => setValue(newValue)}
                onChangeActive={(event, newHover) => setHover(newHover)}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                className="mb-0"
                disabled={sending}
              />
            </Box>
          </div>

          <div className="inputContainer col-12 p-0">
            <textarea
              className="glassmorphism"
              value={testmonialText}
              onChange={(e) => setTestmonialText(e.target.value)}
              disabled={sending}
              rows="4"
              placeholder="write your note..."
            ></textarea>
          </div>

          <div className="col-12 text-center p-0">
            <button
              className="basicBtn m-0 glassmorphism submitBtn"
              type="submit"
              disabled={sending}
            >
              {sending ? (
                <CircularProgress
                  size={30}
                  sx={{ color: "var(--secondary)" }}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default TestmonialsComponent;
