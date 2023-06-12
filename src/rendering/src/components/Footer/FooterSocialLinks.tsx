import ALink from 'components/feature/custom-link';
export default function FooterSocialLinks(props: any) {
  const datasocial = props?.props;
  return (
    <ALink
      href={datasocial.fields.Link.value.href}
      className={datasocial.fields.IconClass.value}
      content={undefined}
      style={undefined}
    >
      <span></span>
    </ALink>
  );
}
