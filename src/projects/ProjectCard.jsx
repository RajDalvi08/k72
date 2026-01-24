import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="relative w-full sm:w-1/2 h-64 sm:h-[400px] md:h-[500px] overflow-hidden rounded-[30px] sm:rounded-[40px] group">

      {/* IMAGE */}
      <img
        src={props.image1}
        alt="Project"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* CTA */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="uppercase font-[font1] text-white text-xs sm:text-sm md:text-base border-2 border-white px-4 sm:px-8 py-2 sm:py-3 rounded-full">
          Voir le projet
        </span>
      </div>

    </div>
  );
};

export default ProjectCard
