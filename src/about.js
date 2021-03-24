import React from 'react';
import {WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon} from 'react-share';

const shareLink = (e)=>{
  console.log("event: ", e)
  }

let url = "https://www.google.com/";

class About extends React.Component {
render() {
      return(
        <WhatsappShareButton
        url={url}
        className="button-social"
        onClick={shareLink}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      )
    };
  }
  export default About;