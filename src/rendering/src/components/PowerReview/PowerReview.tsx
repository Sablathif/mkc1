import { useEffect } from 'react';

const PowerReviews = () => {
  useEffect(() => {
    // Initialize PowerReviews with your account ID
    const merchantGroupId: string = '1147045248';
    const apiKey: string = '658d707f-7e49-4a9d-b8ff-03a4066c50b7';
    const locale: string = 'en_US';
    const pageId: string = '423E5E6F-66E6-45A5-93F6-0AC38609ABBF';
    const containerId: string = 'powerreviews';

    window.POWERREVIEWS.display.render(
      {
        api_key: apiKey,
        locale: locale,
        merchant_group_id: merchantGroupId,
        page_id: pageId,
        components: {
          ReviewSnapshot: {
            container: containerId,
            page_id: pageId,
          },
        },
      },
      function (response: any) {
        console.log(response);
      }
    );
  }, []);

  return (
    <>
      <div id="pr-write"></div>
      <h1>Power Review</h1>
      <div id="review-snapshot"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('DOMContentLoaded', function () {
              var prStyleSheetOverride = $('#franks20-pr-overrides').attr("href");
              if ($('#franks20-pr-overrides-overridden') && $('#franks20-pr-overrides-overridden').length > 0) {
                  prStyleSheetOverride = $('#franks20-pr-overrides-overridden').attr("href");
              }
              POWERREVIEWS.display.render({
                 api_key: '658d707f-7e49-4a9d-b8ff-03a4066c50b7',
                 locale: 'en_US',
                 merchant_group_id: '1147045248',
                 merchant_id: '1638795334',
                 page_id: '423e5e6f-66e6-45a5-93f6-0ac38609abbf',
                  style_sheet: prStyleSheetOverride,
                  on_submit: function (config, data) {
                      window.scrollTo(0, 0);
                  },
                  components: {
                      Write: 'pr-write'
                  }
              });
            });
          `,
        }}
      />
    </>
  );
};

export default PowerReviews;
