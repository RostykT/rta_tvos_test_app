import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import VideoComponent from './src/components/VideoComponent';
const App = () => {
  const [loginView, setLoginView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const handleTouch = () => {
    setShowVideo(!showVideo);
  };
  return (
    <>
      {!loginView ? (
        <LoginScreen setLoginView={setLoginView} />
      ) : !showVideo ? (
        <HomeScreen handleTouch={handleTouch} />
      ) : (
        <VideoComponent handleTouch={handleTouch} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
