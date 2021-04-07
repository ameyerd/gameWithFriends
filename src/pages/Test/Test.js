import React, { useState} from 'react';

// var AWS = require('aws-sdk/dist/aws-sdk-react-native');

// function S3() {
//     return (

//     )
// }

// var albumBucketName = 'gameWithFriends';

// AWS.config.region = 'us-east-2';
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-2:cb252611-164f-4714-9854-9253debe5185',
// });

// var s3 = new AWS.S3({
//     apiVersion: '2006-03-01',
//     params: {Bucket: albumBucketName}
// });

// A utility function to create HTML.
// function getHtml(template) {
// return template.join('\n');
// }

// {/* <head>
// <!-- **DO THIS**: -->
// <!--   Replace SDK_VERSION_NUMBER with the current SDK version number -->
// <script src="https://sdk.amazonaws.com/js/aws-sdk-2.881.0.min.js"></script>
// <script src="./PhotoViewer.js"></script>
// <script>listAlbums();</script>
// </head> */}

// Still trying to peace together how to grab individual images from the bucket in Amazon S3 and display them when needed

const Test = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
         <h1>Trying to get images via Amazon S3</h1>
                        
        </>
    );
};

export default Test;
