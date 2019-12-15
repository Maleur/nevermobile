import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import SpecialChannel from '../../atoms/specialChannel'
import Header from '../../atoms/header'
import theme from '../../../assets/styles/theme.style'
import specials from '../../../assets/samples/specialData'

const SpecialistList = ({seenVideos, activeChannel, updateActiveChannel}) => {
  const channel_type = activeChannel[0]
  const channel_id = activeChannel[1]

  return (
    <View style={styles.container}>
      <Header title={'Specials'}/>
      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal={true}>
        {
          specials.map((value) => {
            const isActive = channel_id == value.id && channel_type == 'specials'
            const unseenVideos = value.playlist.filter(video => !seenVideos.includes(video))
            const isSeen = unseenVideos.length == 0

            return (
              <TouchableOpacity activeOpacity={0.95} key={value.id} onPress={() => updateActiveChannel(['specials', value.id], value.playlist)}>
                <SpecialChannel name={value.name} uri={value.icon} isActive={isActive} isSeen={isSeen} unseenCount={unseenVideos.length} />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: theme.GREY_600
  },
  scrollContainer: {
    paddingBottom: 16
  },
})

export default SpecialistList
