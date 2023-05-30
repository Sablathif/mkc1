import React from 'react';
import ListingCard from './ListingCard';

function Listing(BlogProps: any) {
  const blog = BlogProps?.BlogProps?.fields?.blog;
  return (
    <div className="page-content with-sidebar">
      <div className="container">
        <div className="row gutter-lg">
          <div className="col-lg-12">
            <div className="posts">
              {blog?.map((item: any, index: any) => (
                <ListingCard props={item} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Listing;
