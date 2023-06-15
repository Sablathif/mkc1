import React from 'react';
import ClassicCard from './ClassicCard';

function Classic(BlogProps: any) {
  const blog = BlogProps.BlogProps.fields.blog;
  return (
    <div className="page-content with-sidebar">
      <div className="container">
        <div className="row gutter-lg">
          <div className="col-lg-12">
            <div className="posts">
              {blog?.map((item: any, index: any) => (
                <ClassicCard props={item} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Classic);
