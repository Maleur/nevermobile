import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ChannelList from '../../components/organisms/channelList'
import SpecialsList from '../../components/organisms/specialsList'
import ScreenDimensionsData from '../../helpers/screenDimensionsData'
import YouTube from 'react-native-youtube';
import channels from '../../assets/samples/channelData'
import theme from '../../assets/styles/theme.style'
import { REACT_APP_YOUTUBE_API } from 'react-native-dotenv'

const Home = () => {
  const isLandscape = ScreenDimensionsData().isLandscape;
  const [activeChannel, setActiveChannel] = useState(['default', channels[0].id])
  const [videoList, setVideoList] = useState(channels[0].playlist)

  function updateActiveChannel(channel, playlist) { setActiveChannel(channel); setVideoList(playlist) }

  return (
    <SafeAreaView style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={[styles.videoWrapper, isLandscape && styles.videoWrappperLandscape]}>
        <YouTube loop play apiKey={REACT_APP_YOUTUBE_API} videoId={videoList[0]} videoIds={videoList} style={{ alignSelf : 'stretch', flex: 1 }} origin='http://www.youtube.com' />
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
    backgroundColor: theme.GREY_800,
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
