import ReactPlayerLoader from "@brightcove/react-player-loader";
import React from 'react';

const onFailure = () => console.log("player error");
const onSuccess = () => console.log("player success");

const VideoPlayer = React.lazy(() => {
  return (
    <ReactPlayerLoader
      id="playlist-player-id"
      accountId="5967408303001"
      videoId="5988416512001"
      onFailure={onFailure}
      onSuccess={onSuccess}
      options={{
        responsive: true,
        autoplay: false,
        muted: false
      }}
    />
  );
});
export default VideoPlayer;
