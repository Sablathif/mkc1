import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import CountUpComponent from './CountUp';
function CounterCards(props: any) {
  const data = props?.props;
  console.log('data', data);
  return (
    <div className="col-md-4 mb-4">
      <div className="counter text-center text-dark">
        {/* <CountUp start={ 0 } end={`${data.fields.Number.value}`} duration={ 4 }> */}
        <CountUpComponent endValue={data.fields.CountUp.value} duration={4} />
        <h5 className="count-title font-weight-bold text-body ls-md">
          <RichText field={data?.fields?.SubTitle}></RichText>
        </h5>

        <RichText className="text-grey mb-0" field={data?.fields?.Description} />
      </div>
    </div>
  );
}
export default CounterCards;
