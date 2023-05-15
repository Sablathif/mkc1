import React from 'react';
import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeadingProps = ComponentProps & {
    fields: {
        Heading: Field<string>;
    };
};

const Heading = (props: HeadingProps): JSX.Element => {
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <section className="mt-10 pt-4 border-container">
                        <h2 className="title title-center">
                            <Text field={props.fields.Heading} />
                        </h2>
                    </section>
                </div>
            </div>
        </>
    );
};

//export const Default = Heading;
export default React.memo(Heading);
