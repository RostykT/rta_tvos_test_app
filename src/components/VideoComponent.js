import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import Video from 'react-native-video';
const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;
// import TestVideo from '../../assets/video.mp4';

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 100,
    // right: 0,
    left: viewWidth * 0.214,
    // bottom: 0,
    width: viewWidth / 1.75,
    height: viewHeight / 1.75,
    backgroundColor: 'green',
  },
  wrapper: {
    width: viewWidth,
    height: viewHeight,
  },
});
console.log(viewWidth, viewHeight);
const VideoComponent = ({handleTouch}) => {
  return (
    // <Video
    //   source={{
    //     // uri: "http://http://3.8.204.112/api/video",
    //     uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    //   }}
    //   ref={ref => {
    //     this.player = ref;
    //   }}
    //   controls={true}
    //   onBuffer={this.onBuffer}
    //   onError={this.videoError}
    //   style={styles.backgroundVideo}
    // />
    <View style={styles.backgroundVideo} />
  );
};

export default VideoComponent;
