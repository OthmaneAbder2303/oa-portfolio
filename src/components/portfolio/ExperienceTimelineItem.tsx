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
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
      <motion.div
        className="w-auto sm:w-28 shrink-0 text-sm text-muted-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={dateVariant}
        transition={{ duration: 0.5 }}
      >
        {date}
      </motion.div>

      <motion.div
        className="w-full flex-1 rounded-2xl border p-4 transition-transform group hover:scale-[1.02] hover:shadow-lg hover:border-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariant}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <h4 className="font-semibold break-words">{title}</h4>
          {company && <span className="text-sm text-muted-foreground break-words">{company}</span>}
        </div>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      </motion.div>
    </div>
  );
};

export default ExperienceTimelineItem;
