import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ChannelList from '../../components/organisms/channelList'
import SpecialsList from '../../components/organisms/specialsList'
import ScreenDimensionsData from '../../helpers/screenDimensionsData'
import YouTube from 'react-native-youtube';
import { REACT_APP_YOUTUBE_API } from 'react-native-dotenv'

let videoList = ['ErfEnD2WA3A', 'JZnlJ2upJv8', 'Km8kIX-8hVs']
const Home = () => {
  const isLandscape = ScreenDimensionsData().isLandscape;
  const [activeChannel, setActiveChannel] = useState(['default', 1])

  function updateActiveChannel(channel, playlist) { setActiveChannel(channel); videoList = playlist }

  return (
    <SafeAreaView style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={[styles.videoWrapper, isLandscape && styles.videoWrappperLandscape]}>
        <YouTube apiKey={REACT_APP_YOUTUBE_API} videoId={videoList[0]} videoIds={videoList} style={{ alignSelf : 'stretch', flex: 1 }}/>
      </View>
      <View style={[styles.navigationWrapper, isLandscape && styles.navigationWrapperLandscape]}>
        <SpecialsList activeChannel={activeChannel} updateActiveChannel={updateActiveChannel} />
        <ChannelList activeChannel={activeChannel} updateActiveChannel={updateActiveChannel} />
      </View>
    </SafeAreaView>
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
