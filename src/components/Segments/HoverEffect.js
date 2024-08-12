import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";

export const HoverEffect = ({items, className}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 py-10 ${className}`}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-500 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{opacity: 0}}
                animate={{
                  opacity: 1,
                  transition: {duration: 0.15},
                }}
                exit={{
                  opacity: 0,
                  transition: {duration: 0.15, delay: 0.2},
                }}
              />
            )}
          </AnimatePresence>
          <Card backgroundImage={item.backgroundImage}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({className, children, backgroundImage}) => {
  return (
    <div
      className={`rounded-2xl h-full w-full p-4 overflow-hidden  border border-transparent dark:border-white/[0.2] group-hover:border-slate-200 relative z-20 ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({className, children}) => {
  return (
    <h4
      className={`text-zinc-50  font-bold tracking-wide mt-4 ${className}`}
      style={{fontSize: "22px"}}>
      {children}
    </h4>
  );
};

export const CardDescription = ({className, children}) => {
  return (
    <p
      className={`mt-8 text-zinc-200 tracking-wide leading-relaxed text-sm ${className}`}>
      {children}
    </p>
  );
};
