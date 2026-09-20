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
      <div className="portfolio-card group-hover:border-primary">
        <div className="card-media w-full bg-primary/5">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="card-content">
          <h3 className="card-title text-lg font-semibold mb-1">{title}</h3>
          {description && <p className="card-description text-sm text-muted-foreground">{description}</p>}
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
