//import CountUp from 'react-countup';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
function StatsCardData(props: any) {
  const data = props?.props;
  return (
    <div className="col-md-4 mb-4">
      <div className="counter text-center text-dark">
        {/* <CountUp start={ 0 } end={`${data.fields.Number.value}`} duration={ 4 }> */}
        {/* <CountUp start={0} end={data?.fields?.Number?.value} duration={4}>
          {({ countUpRef, start }) => (
            <div className="count-to">
              <span ref={countUpRef} />
              <button onClick={start} className="d-none">
                Start
              </button>
            </div>
          )}
        </CountUp> */}
        <h5 className="count-title font-weight-bold text-body ls-md">
          {data?.fields?.Title?.value}
        </h5>
        <p className="text-grey mb-0">{data?.fields?.Description.value}</p>
      </div>
    </div>
  );
}
export default StatsCardData;
