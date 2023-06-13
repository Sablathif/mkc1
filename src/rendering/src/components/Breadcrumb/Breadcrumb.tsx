import React from 'react';
import { ComponentProps } from 'lib/component-props';

type BreadcrumbProps = ComponentProps & {
  fields: {
    data: {
      item: {
        url: { path: string };
        name: string;
        pageTitle: { value: string };
        displayName: string;
        title: { value: string };
        ancestors: [
          item: {
            url: { path: string };
            name: string;
            pageTitle: { value: string };
            displayName: string;
            title: { value: string };
          }
        ];
      };
    };
  };
};

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  //console.log(props.fields.data.item.ancestors)
  const propItemAncestors = props.fields.data.item.ancestors;
  const breadcrumbs = [];
  const sxaStyles = `${props.params?.styles || ''}`;
  const pageItems = {
    title:
      props.fields.data.item.pageTitle != null
        ? props.fields.data.item.pageTitle.value
        : props.fields.data.item.title.value,
    url: props.fields.data.item.url.path,
    className: 'active',
  };

  breadcrumbs.push(pageItems);
  if (propItemAncestors) {
    propItemAncestors.map((parent) => {
      breadcrumbs.push({
        title: parent.pageTitle != null ? parent.pageTitle.value : parent.title.value,
        url: parent.url.path,
        className: 'inactive',
      });
    });
  }

  const breadcrumbListItems = breadcrumbs.reverse().map((bc, index) => (
    <li key={index}>
      <a title={bc.title} href={bc.url}>
        {bc.title}
      </a>
    </li>
  ));

  {
    console.log(breadcrumbListItems);
  }

  return (
    <nav className={`breadcrumb ${sxaStyles}`} aria-label="breadcrumbs">
      <ol className="list">{breadcrumbListItems}</ol>
    </nav>
  );
};

export default Breadcrumb;
