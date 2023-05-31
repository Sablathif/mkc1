import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  faHeart,
  faPlus,
  faMinus,
  faCircle,
  faStar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const Icons: Record<string, any> = {
  faHeart,
  faPlus,
  faMinus,
  faCircle,
  faStar,
  faCheck,
};
// const AccordionIcon = (props, index: number): JSX.Element => {
function AccordionIcon(props: any, index: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const iconClass = props?.props?.fields?.IconClass?.value?.toString();
  const data = props?.props;
  const icon = iconClass ? Icons[iconClass] : faCheck;

  return (
    <div className={`accordion-item ${activeIndex === index ? 'expanded' : ''}`} key={index}>
      <div className="card-header">
        <FontAwesomeIcon icon={icon} />
        <button onClick={() => handleClick(index)}>
          <Text field={data?.fields?.Heading} />
          <FontAwesomeIcon
            icon={activeIndex === index ? faMinus : faPlus}
            className="accordion-icon"
          />
        </button>
      </div>
      {activeIndex === index && (
        <div className="card-body">
          <p>
            <Text field={data?.fields?.Description} />
          </p>
        </div>
      )}
    </div>
  );
}

export default AccordionIcon;
