import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoDownload = () => {
  const [downloadedVideo, setDownloadedVideo] = useState(null);

  const downloadVideo = async () => {
    try {
      const response = await axios.get('http://localhost:8000/download/{video_id}', {
        responseType: 'blob', // Treat the response as a binary blob
      });

      // Create a URL for the blob and set it to the video element
      const videoUrl = URL.createObjectURL(new Blob([response.data]));
      setDownloadedVideo(videoUrl);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div>
      <h2>Download Video</h2>
      <button onClick={downloadVideo}>Download Video</button>
      {downloadedVideo && (
        <video controls width="400">
          <source src={downloadedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoDownload;
