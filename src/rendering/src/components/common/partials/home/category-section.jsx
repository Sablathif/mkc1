import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeIn } from '../../../../utils/data/keyframes';
import CategorySectionCard from './CategorySectionCard';

function CategorySection(props) {
  const categories = props?.props?.fields?.Categories;
  const data = props?.props;
  return (
    <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
      <section className="pt-10 mt-7">
        <div className="container">
          <h2 className="title title-center mb-5">{data?.fields?.Title?.value}</h2>
          <div className="row">
            {categories?.map((data, index) => (
              <CategorySectionCard props={data} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default React.memo(CategorySection);
