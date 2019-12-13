import React from 'react'
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import Channel from '../../atoms/channel'
import Header from '../../atoms/header'
import theme from '../../../assets/styles/theme.style'
import channels from '../../../assets/samples/channelData'

const ChannelList = ({activeChannel, updateActiveChannel}) => {
  const containerWidth = Dimensions.get('window').width;
  const divisor = Math.floor(containerWidth / 126);
  const calc_width = (containerWidth - 16) / divisor

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
                <View style={[styles.channelContainer, {width: calc_width}]} key={value.id} onStartShouldSetResponder={() => updateActiveChannel(['default', value.id])} >
                  <Channel name={value.name} uri={value.icon} isActive={isActive} />
                </View>
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
    backgroundColor: theme.GREY_800,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'coral',
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  channelContainer: {
    alignItems: 'center'
  }
})

export default ChannelList
