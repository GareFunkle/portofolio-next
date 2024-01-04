import React from "react";
import ButtonLinkPortofolio from "@/components/ui/buttonLinkPortofolio/ButtonLinkPortofolio";

const ExperienceLinks = (props) => {
  return (
    <div className='lg:mx-12'>
      <div className='mt-4 space-y-4  lg:mt-8'>
        {props.category.map((item, index) => (
          <ButtonLinkPortofolio
            isSelected={props.selectedCategory === item.name}
            onSelect={() => props.onCategorySelect(item.name)}
            key={index}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceLinks;
