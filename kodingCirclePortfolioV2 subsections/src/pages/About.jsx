import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";
import ProposalPDF from "./Offeringsv2.pdf";
import MSME from "./MSME.pdf";


const onButtonClick = () => {
  const pdfUrl = "https://docs.google.com/document/d/1iPtGuENLApOIVJeZ8hpSjlmmFmzOiJ6Dr9L9XptoOl0/export?format=pdf";
  const link = document.createElement("a");
  link.href = "https://docs.google.com/document/d/1iPtGuENLApOIVJeZ8hpSjlmmFmzOiJ6Dr9L9XptoOl0/export?format=pdf";
  link.download = "https://docs.google.com/document/d/1iPtGuENLApOIVJeZ8hpSjlmmFmzOiJ6Dr9L9XptoOl0/export?format=pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text text-center'>
        Hello, We are {" "}
        <motion.span initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }} className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          KodingCircle
        </motion.span>{" "}
        <motion.span
          style={{ fontSize: '50px', display: 'inline-block' }}
          // Rotation animation to simulate waving
          animate={{
            rotate: [0, 20, -20, 20, -20, 0], // keyframes for the wave
          }}
          transition={{
            duration: 1.5, // duration of each wave
            ease: 'easeInOut',
            repeat: Infinity, // makes the waving loop
            repeatType: 'loop', // continuous looping
          }}>
          👋
        </motion.span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 text-center'>
        <p>
         We understand the challenges you're facing in an increasingly competitive digital landscape. You're not just looking for a website—you want a solution that drives traffic, converts visitors into loyal customers, and helps you stand out.
        </p>
      </div>


      <br></br>


      <div class="flex justify-center mt-4 mb-3">
        <a className='btn m-3' href={ProposalPDF} target="_blank">
          Our Offers Document 📥
        </a>
        <a className='btn m-3' href={MSME} target="_blank">
          MSME Certificate 📥
        </a>
      </div>




      <div className='py-16'>

        <h3 className='subhead-text'>How We Can Help You</h3>

        <div className='mt-12 flex'>

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >

                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>


        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Our Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-10 h-20' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <br></br>
        <br></br>

        <h3 className='subhead-text'>Our Promise</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 text-center'>
          <p>
            We'll help you build a strong online presence that not only looks professional but also meets your business objectives. From personalized shopping experiences and streamlined checkouts to unique designs that reflect your brand’s identity, we’ll give you the tools to attract and retain customers.
          </p>
        </div>



        <br></br>
        <br></br>

        <h3 className='subhead-text'>Our Mission</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 text-center'>
          <p>
            Our mission is to provide comprehensive, top-notch digital services that help startups thrive in today’s competitive market. Whether you're just starting out or looking to enhance your digital presence, Koding Circle is here to support you every step of the way.

            With a focus on innovation and quality, we have helped numerous startups turn their ideas into successful digital businesses.

          </p>
        </div>


      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
