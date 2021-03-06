import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View,Text } from 'react-native';

const ScreenDimensionsData = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'))

  useEffect(() => {
    const onChange = result => {
      setScreenData(result.screen);
    };
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  }
};

export default ScreenDimensionsData
