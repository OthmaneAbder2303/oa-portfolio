import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tags?: string[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const ProjectCard: React.FC<Props> = ({ title, description, image = '/placeholder.svg', href = '#', tags = [] }) => {
  return (
    <motion.a
      href={href}
      className="group block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-xl border bg-white/60 dark:bg-[#0b1220]/60 border-transparent transition-all duration-300 transform will-change-transform group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-primary">
        <div className="w-full h-44 bg-gray-100 dark:bg-gray-900 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-muted/30">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
