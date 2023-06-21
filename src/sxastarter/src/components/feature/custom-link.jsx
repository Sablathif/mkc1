import Link from 'next/link';
import parseContent from '../../utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ALink({ children, className, content, style, ...props }) {
  const preventDefault = (e) => {
    if (props.href === '#') {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? (
    <Link {...props}>
      <a
        className={className}
        style={style}
        onClick={preventDefault}
        dangerouslySetInnerHTML={parseContent(content)}
      >
        {children}
      </a>
    </Link>
  ) : (
    <Link {...props}>
      <a className={className} style={style} onClick={preventDefault}>
        {children}
      </a>
    </Link>
  );
}

export default ALink;
