import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import database from './firebase';

const Contact = () => {

  const phoneNumber = "8584855651";
  const message = encodeURIComponent("Hello, I'm interested in your services!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "", number: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");


  const Push = () => {
    setCurrentAnimation("idle");
    database.ref("Ads Funnel").set({
      name: "name",
      age: "age",
    }).catch(alert);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    var messagesRef = database.ref('Ads Funnel');
    messagesRef.push(form);


    showAlert({
      show: true,
      text: "Thank you for your message 😃",
      type: "success",
    });


    setTimeout(() => {
      setLoading(false);
      hideAlert(false);
      setCurrentAnimation("idle");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, [2000]);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       showAlert({
    //         show: true,
    //         text: "Thank you for your message 😃",
    //         type: "success",
    //       });

    //       setTimeout(() => {
    //         hideAlert(false);
    //         setCurrentAnimation("idle");
    //         setForm({
    //           name: "",
    //           email: "",
    //           message: "",
    //         });
    //       }, [3000]);
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);
    //       setCurrentAnimation("idle");

    //       showAlert({
    //         show: true,
    //         text: "I didn't receive your message 😢",
    //         type: "danger",
    //       });
    //     }
    //   );
  };

  return (
    <>
      <section className='relative flex lg:flex-row flex-col max-container'>
        {alert.show && <Alert {...alert} />}

        <div className='flex-1 min-w-[50%] flex flex-col'>
          <motion.h1 initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }} className='head-text text-center'>Get in Touch
          </motion.h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-7 mt-14'
          >
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type='text'
                name='name'
                className='input'
                placeholder='John'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Phone number
              <input
                type='text'
                name='number'
                className='input'
                placeholder='8945215785'
                required
                value={form.number}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input
                type='email'
                name='email'
                className='input'
                placeholder='John@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea'
                placeholder='Write your thoughts here...'
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='btn'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>


        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>



      <div className="flex justify-center gap-8">

        <div className="flex flex-col items-center justify-center border rounded-lg shadow-md p-4 w-45">
          <div className="bg-red-100 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8-4H8m8 8H8"
              />
            </svg>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm font-semibold"><a href="mailto:kodingcircle@gmail.com">Email</a></p>
            <p className="text-sm text-gray-600"><a href="mailto:kodingcircle@gmail.com">kodingcircle@gmail.com</a></p>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center border rounded-lg shadow-md p-4 w-45" 
        href={whatsappLink} target="_blank">
          <div className="bg-red-100 p-3 rounded-full" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 15 18"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10l4 4m0 0l4-4m-4 4V4"
              />
            </svg>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm font-semibold"><a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
            <p className="text-sm text-gray-600"><a href={whatsappLink} target="_blank" rel="noopener noreferrer">85848 55651</a></p>
          </div>
        </div>








      </div>

    </>
  );
};

export default Contact;
