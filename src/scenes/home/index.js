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
  const [channelPlaylist, setChannelPlaylist] = useState(channels[0].playlist)
  const [playbackList, setPlaybackList] = useState(channels[0].playlist)

  function updateActiveChannel(channel, playlist) {
    setActiveChannel(channel);
    console.log('channel is =>', channel)
    console.log('acive channel is =>', activeChannel)
    setChannelPlaylist(playlist);
    updatePlaybackList(playlist);
  }

  function updatePlaybackList(playlist) {
    const unseenVideos = playlist.filter(video => !watchedData.includes(video))
    console.log('unseen videos=>', unseenVideos)
    playbackPlaylist = unseenVideos.concat(playlist)
    console.log('playbackPlaylist=>', playbackPlaylist)
    setPlaybackList(playbackPlaylist)
  }

  function updateSeenVideos(e) {
    console.log('video state changed', e);
  }

  const watchedData = ['B_3pGTXHlTo', 'pbj-gzf9OeA', 'T44ccJQvlx8', '82pVND3efEc', 's-v3dXosB_4', 'P2ppuFwPt6A', 'BfHIw2iFvR4', 'gey-oGUFiJo']
  return (
    <SafeAreaView style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={[styles.videoWrapper, isLandscape && styles.videoWrappperLandscape]}>
        <YouTube loop play apiKey={REACT_APP_YOUTUBE_API} onChangeState={(e) => updateSeenVideos(e)} videoIds={playbackList} style={{ alignSelf : 'stretch', flex: 1 }} origin='http://www.youtube.com' />
      </View>
      <View style={[styles.navigationWrapper, isLandscape && styles.navigationWrapperLandscape]}>
        <SpecialsList seenVideos={watchedData} activeChannel={activeChannel} updateActiveChannel={updateActiveChannel} />
        <ChannelList seenVideos={watchedData} activeChannel={activeChannel} updateActiveChannel={updateActiveChannel} />
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
    flexGrow: 1,
    flex: 1
  },
  videoWrappperLandscape: {
    flexGrow: 2,
  },
  navigationWrapper: {
    flexGrow: 2,
    flex: 1,
  },
  navigationWrapperLandscape: {
    flexGrow: 1,
    minWidth: 42
  }
})

export default Home
