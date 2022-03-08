import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import TestVideo from '../assets/terminator.mp4';
const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 100,
    left: viewWidth * 0.214,
    width: viewWidth / 1.75,
    height: viewHeight / 1.75,
  },
  wrapper: {
    width: viewWidth,
    height: viewHeight,
  },
});
const VideoComponent = ({handleTouch}) => {
  return (
    // TODO: fix video controls
    <Video
      source={TestVideo}
      // ref={ref => {
      //   this.player = ref;
      // }}
      controls
      onBuffer={this.onBuffer}
      onError={this.videoError}
      style={styles.backgroundVideo}
    />
  );
};

export default VideoComponent;
