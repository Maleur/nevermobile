import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Channel from '../../atoms/channel'
import Header from '../../atoms/header'
import theme from '../../../assets/styles/theme.style'
import channels from '../../../assets/samples/channelData'

const ChannelList = ({activeChannel, updateActiveChannel}) => {
  const channel_type = activeChannel[0]
  const channel_id = activeChannel[1]

  return (
    <View style={{flexGrow: 1}}>
      <Header title={'Channels'}/>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          {
            channels.map((value) => {
              const isActive = channel_id == value.id && channel_type == 'default'
              return (
                <TouchableOpacity activeOpacity={0.95} style={styles.channelContainer} onPress={() => updateActiveChannel(['default', value.id], value.playlist)} key={value.id}>
                  <Channel name={value.name} uri={value.icon} isActive={isActive} />

                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  channelContainer: {
    alignItems: 'center'
  }
})

export default ChannelList
