import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  date: string;
  title: string;
  company?: string;
  description?: string;
};

const dateVariant = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const contentVariant = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };

const ExperienceTimelineItem: React.FC<Props> = ({ date, title, company, description }) => {
  return (
    <div className="flex gap-4 items-start">
      <motion.div
        className="w-28 text-sm text-muted-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={dateVariant}
        transition={{ duration: 0.5 }}
      >
        {date}
      </motion.div>

      <motion.div
        className="flex-1 rounded-lg border p-4 transition-transform group hover:scale-[1.02] hover:shadow-lg hover:border-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariant}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{title}</h4>
          {company && <span className="text-sm text-muted-foreground">{company}</span>}
        </div>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      </motion.div>
    </div>
  );
};

export default ExperienceTimelineItem;
