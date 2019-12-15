import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ChannelList from '../../components/organisms/channelList'
import SpecialsList from '../../components/organisms/specialsList'
import ScreenDimensionsData from '../../helpers/screenDimensionsData'
import YouTube from 'react-native-youtube';
import channels from '../../assets/samples/channelData'
import theme from '../../assets/styles/theme.style'
import { REACT_APP_YOUTUBE_API } from 'react-native-dotenv'
import AsyncStorage from '@react-native-community/async-storage';

const Home = () => {
  const isLandscape = ScreenDimensionsData().isLandscape;
  const [activeChannel, setActiveChannel] = useState(['default', channels[0].id])
  const [playbackList, setPlaybackList] = useState(channels[0].playlist)
  const [seenData, setSeenData] = useState([])
  const youtubeRef = useRef(null)

  useEffect(() => {
    updateSeenData();
    updatePlaybackList(channels[0].playlist)
  }, []);

  async function updateSeenData() {
    const seenVideos = await getVideoCookies()
    if (seenVideos !== null) { setSeenData(seenVideos.split(',')); }
  }

  function updateActiveChannel(channel, playlist) {
    setActiveChannel(channel);
    updatePlaybackList(playlist);
  }

  async function updatePlaybackList(playlist) {
    const seenVideos = await getVideoCookies()
    const unseenVideos = playlist.filter(video => !seenVideos.includes(video))
    const playbackPlaylist = unseenVideos.concat(playlist)
    setPlaybackList(playbackPlaylist)
  }

  async function updateSeenVideos(e) {
    if (e.state === 'playing') {
      const index = await getVideoIndex()
      const videoId = playbackList[index]
      const seenVideos = await getVideoCookies()

      if (seenVideos === null) {
        newCookie = videoId
        await updateVideoCookies(newCookie)
      } else if (!seenVideos.includes(videoId)) {
        newCookie = seenVideos.concat(',', videoId)
        await updateVideoCookies(newCookie)
      }

      await updateSeenData()
    }
  }

  async function getVideoIndex() {
    return youtubeRef.current.getVideosIndex()
  }

  async function updateVideoCookies(value) {
    return AsyncStorage.setItem('@seenVideos', value)
  }

  async function getVideoCookies() {
    return AsyncStorage.getItem('@seenVideos')
  }

  return (
    <SafeAreaView style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={[styles.videoWrapper, isLandscape && styles.videoWrappperLandscape]}>
        <YouTube loop play apiKey={REACT_APP_YOUTUBE_API} onChangeState={(e) => updateSeenVideos(e)} videoIds={playbackList} style={{ alignSelf : 'stretch', flex: 1 }} origin='http://www.youtube.com' ref={youtubeRef} />
      </View>
      <View style={[styles.navigationWrapper, isLandscape && styles.navigationWrapperLandscape]}>
        <SpecialsList seenVideos={seenData} activeChannel={activeChannel} updateActiveChannel={updateActiveChannel} />
        <ChannelList seenVideos={seenData} activeChannel={activeChannel} updateActiveChannel={updateActiveChannel} />
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
