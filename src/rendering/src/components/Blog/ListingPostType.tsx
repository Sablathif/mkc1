import dynamic from 'next/dynamic';
const image = dynamic(() => import('./ImageListingCard'));
const video = dynamic(() => import('./VideoListingCard'));

const POSTTYPE: Record<string, any> = {
  image,
  video,
};

const ListingPostType = (data: any): JSX.Element => {
  const postType = data?.props?.fields?.postType?.value;
  const Component = postType ? POSTTYPE[postType] : image;
  return <Component props={data} />;
};
export default ListingPostType;
