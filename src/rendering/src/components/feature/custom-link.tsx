import Link from 'next/link';

//import { parseContent } from '~/utils';

//import { parseContent } from '../../utils';

export default function ALink({ children, className, content, style, ...props }: any) {
  //const preventDefault = (e) => {
  const preventDefault = (e: { preventDefault: () => void; }) => {
    if (props.href === '#') {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? (
    <Link {...props} passHref legacyBehavior>
      <a
        className={className}
        style={style}
        onClick={preventDefault}
        //dangerouslySetInnerHTML={parseContent(content)}
        dangerouslySetInnerHTML={ { __html :  content} }
      >
        {children}
      </a>
    </Link>
  ) : (
    <Link {...props} passHref legacyBehavior>
      <a className={className} style={style} onClick={preventDefault}>
        {children}
      </a>
    </Link>
  );
}
