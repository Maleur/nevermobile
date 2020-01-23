import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ChannelList } from '../channelList'
import { SpecialsList } from '../specialsList'

const Navigation = () => {
  return (
    <View style={styles.navigationWrapper}>
      <SpecialsList />
      <ChannelList />
    </View>
  )
}

const styles = StyleSheet.create({
  navigationWrapper: {
    flexGrow: 1
  },
})

export default Navigation
