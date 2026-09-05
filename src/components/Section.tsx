import React from 'react';

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ id, kicker, title, children }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <header className="mb-10 border-b border-rule/80 pb-6">
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  );
};

export default Section;
