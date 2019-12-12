import React from 'react'
import { StyleSheet, View,Text } from 'react-native';
import Navigation from '../../components/organisms/navigation'
import ScreenDimensionsData from '../../helpers/screenDimensionsData'

const Home = () => {
  const screenData = ScreenDimensionsData();

  return (
    <View style={[styles.container, screenData.isLandscape && styles.containerLandscape]}>
      <View style={[styles.videoWrapper, screenData.isLandscape && styles.videoWrappperLandscape]}>
        <Text>I am a video content</Text>
      </View>
      <View style={[styles.navigationWrapper, screenData.isLandscape && styles.navigationWrapperLandscape]}>
        <Navigation />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'violet',
    flex: 1,
    justifyContent: 'space-between'
  },
  containerLandscape: {
    flexDirection: 'row',
  },
  videoWrapper: {
    backgroundColor: 'red',
    flexGrow: 1,
    flex: 1
  },
  videoWrappperLandscape: {
    flexGrow: 2,
  },
  navigationWrapper: {
    flexGrow: 2,
    flex: 1,
    backgroundColor: 'green',
  },
  navigationWrapperLandscape: {
    flexGrow: 1,
    minWidth: 16
  }
})

export default Home
