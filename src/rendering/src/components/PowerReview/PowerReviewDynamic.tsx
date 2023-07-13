import dynamic from 'next/dynamic';

const ComponentWithNoSSR = dynamic(() => import('./PowerReview'), { ssr: false });

function PowerReviewDynamic() {
  return (
    <div>
      <ComponentWithNoSSR />
    </div>
  );
}

export default PowerReviewDynamic;
