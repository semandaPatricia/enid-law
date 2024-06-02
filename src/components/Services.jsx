import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";
import { GoLaw } from "react-icons/go";
import { GiClawHammer } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";

import React from 'react'



const Services = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    
    
    <section className="p-2 mt-4 mb-8">
      <div className="items-center flex justify-center">
      <h1 className="text-3xl font-bold mb-10 "> Services</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row h-fit min-w-full lg:h-[670px]  w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
              desc1={item.desc1}
              desc2={item.desc2}
              desc3={item.desc3}
              desc4={item.desc4}
            />
          );
        })}
      </div>
    </section>
    
  );
};
export default Services

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
  desc1,
  desc2,
  desc3,
  desc4,
}) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className=" hover:bg-slate-400 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-10 relative group"
        onClick={() => setOpen(id)}
        style={{ backgroundColor: "#6F9EAD", color: "white" }}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-bold rotate-180 uppercase"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-bold uppercase">
          {title}
        </span>
        <div className="w-8 lg:w-full aspect-square bg-slate-500 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex  items-center "  //flex-wrap
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2  text-white"  //bg-black/40 backdrop-blur-sm
            >   
              <h1 className="font-bold text-2xl mb-3"> {title}</h1>

              <p className="mb-3 text-slate-500">{description}</p>
              {/*sub-desriptions 1234 */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
                <div>
                  <h3 className="font-bold text-xl">01</h3>
                  <p className="">{desc1}</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">02</h3>
                  <p>{desc2}</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">03</h3>
                  <p>{desc3}</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">04</h3>
                  <p>{desc4}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

//export default Services;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Dispute Resolution",
    Icon: GoLaw,
    imgSrc:
      "https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur .",
    desc1:
      "Protection of interests in arbitration courts and within the framework of international commercial arbitration",
    desc2:
      "Protection of interests within the framework of enforcement proceedings",
    desc3:
      "Representation of interests in disputes in the field of construction and real estate",
    desc4:
      "Representation of interests in disputes related to the securities market",
  },
  {
    id: 2,
    title: "Protection of business",
    Icon: GiClawHammer,
    imgSrc:
      "https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    desc1:
      "Client protection in courts of all instances in criminal proceedings",
    desc2:
      "Development of strategy and tactics for conducting litigation",
    desc3:
      "Consulting, legal risk assessment, preparation of legal opinions",
    desc4:
      "Assisting the client at the stage of pre-investigation and investigation",
  },
  {
    id: 3,
    title: "Tax consulting",
    Icon: GoLaw,
    imgSrc:
      "https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    desc1: "Consulting on the application of legislation on taxes and fees",
    desc2:
      "Consulting on the application of international agreements on the avoidance of double taxation",
    desc3: "Representation of interests in courts in tax disputes",
    desc4:
      "Analysis and assessment of tax risks, preparation of recommendations to reduce the tax burden",
  },
  {
    id: 4,
    title: "Legal outsourcing",
    Icon: GiClawHammer,
    imgSrc:
      "https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
    desc1:
      "Legal support in reorganization and restructuring of business and assets",
    desc2: "Due Diligence",
    desc3: "Supporting clients at all stages of investment projects",
    desc4:
      "Legal support on various aspects of company activities related to corporate law. Corporate law",
  },
];
