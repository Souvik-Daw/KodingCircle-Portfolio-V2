import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import {
  tesla,
  threejs,
  meta,
  shopify,
  starbucks,
  git
} from "../assets";
import StarIcon from "@mui/icons-material/Star";

function abcd() {
  return 4;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  star
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    href="https://www.kodingcircle.in/home"
  >
    <p className='text-black font-black text-[48px]'>"</p>

    <div className='mt-1'>

      <h1>{star == 4 ?
        (<div><StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gray", opacity: 0.5, fontSize: 30 }} /></div>) :
        (<div><StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} />
          <StarIcon style={{ color: "gold", fontSize: 30 }} /></div>)
      }</h1>



      <p className='text-black tracking-wider text-[18px] mt-3'>{testimonial}</p>


      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-black font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <a href="https://www.google.com/search?q=kodingcircle&sca_esv=ead86818698e8678&rlz=1C1YTUH_enIN1089IN1089&sxsrf=ADLYWII_1aICsCIGqDUOBWnCMG-Lts94PA%3A1732364284525&ei=_MdBZ6LgH-rU4-EPjaicgQI&ved=0ahUKEwiizrPut_KJAxVq6jgGHQ0UJyAQ4dUDCA8&uact=5&oq=kodingcircle&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGtvZGluZ2NpcmNsZTIEECMYJzIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESO4KULwGWLwGcAF4AZABAJgB2QGgAdkBqgEDMi0xuAEDyAEA-AEBmAICoALpAcICBxAjGLADGCfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhwQLhiABBiwAxhDGMcBGJgFGMgDGIoFGK8B2AEBmAMA4gMFEgExIECIBgGQBhO6BgYIARABGAmSBwUxLjAuMaAHggU&sclient=gws-wiz-serp#lrd=0x214613940e6ddba1:0xb5cb43ad2f573401,1,,,," 
          className='mt-1 text-secondary text-[12px]'>
            show on google
          </a>
        </div>


      </div>
    </div>
  </motion.div>
);

const brands = [
  { src: tesla, alt: 'The Ask Avi Arya Show' },
  { src: threejs, alt: 'Tarot Sakhi' },
  { src: meta, alt: 'Internet Moguls' },
  { src: shopify, alt: 'Think School' },
  { src: starbucks, alt: 'Fit Hitesh' },
  { src: git, alt: 'Labelle' }
];

const Review = () => {
  return (
    <div className={`pt-10  bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <motion.h2 initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }} className={styles.sectionHeadText}>Testimonials.</motion.h2>

        </motion.div>
      </div>

      <div className="flex flex-wrap">
        <div className={`-mt-20 pb-14 ${styles.paddingX} gap-7 sm:flex`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* <div className=" text-center mb-10 p-10">
        <h2 className="text-black-500 text-lg mb-8">Trusted by 50+ Brands & Businesses Worldwide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-16 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div> */}

    </div>
  );
};

export default Review;