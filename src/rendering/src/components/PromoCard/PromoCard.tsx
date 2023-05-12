import { ComponentProps } from 'lib/component-props';
import Styles from './PromoCard.module.scss';

export type PromoCardProps = ComponentProps & {
  fields: {
    CardImage: {
      value: {
        src: string;
      };
    };
    CardTitle: {
      value: string;
    };
    CardDescription: {
      value: string;
    };
    CardButton: {
      value: {
        href: string;
        text: string;
      };
    };
  };
};

const NewsLetter = (props: PromoCardProps): JSX.Element => {
  return (
    <>
      <div
        className={Styles.newsletter}
        style={{ backgroundImage: `url(${props.fields.CardImage.value.src.slice(10)})` }}
      >
        <div className="container-fluid">
          <div className={`${Styles.newsletterRow} row`}>
            <div className="col-lg-5">
              <h3>{props.fields.CardTitle.value}</h3>
            </div>
            <div className="col-lg-5">
              <p>{props.fields.CardDescription.value}</p>
            </div>
            <div className="col-lg-2">
              <a className={Styles.newsletterBtn} href={props.fields.CardButton.value.href}>
                {props.fields.CardButton.value.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
