import React from "react";
import { motion } from "motion/react";
import { contact } from "../constants/constant";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="my-20 text-center text-4xl">Get in touch</motion.h2>
      <div className="text-center text-neutral-400 cursor-pointer tracking-tighter">
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.5 }}
        className="my-4 hover:text-white tracking-normal">{contact.address}</motion.p>
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 1 }}
        className="my-4 hover:text-white tracking-normal">{contact.phoneNo}</motion.p>
        <a className="border-b hover:text-white" href="#">{contact.email}</a>
      </div>
    </div>
  );
};

export default Contact;
