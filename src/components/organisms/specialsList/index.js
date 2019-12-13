import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SpecialChannel from '../../atoms/specialChannel'
import Header from '../../atoms/header'
import theme from '../../../assets/styles/theme.style'
import specials from '../../../assets/samples/specialData'

const SpecialistList = ({activeChannel, updateActiveChannel}) => {
  const channel_type = activeChannel[0]
  const channel_id = activeChannel[1]

  return (
    <View>
      <Header title={'Specials'}/>
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
        {
          specials.map((value) => {
            const isActive = channel_id == value.id && channel_type == 'specials'
            return (
              <View key={value.id} onStartShouldSetResponder={() => updateActiveChannel(['specials', value.id], value.playlist)}>
                <SpecialChannel name={value.name} uri={value.icon} style={{backgroundColor: 'red'}} isActive={isActive} />
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.GREY_800,
    backgroundColor: 'blue',
    paddingBottom: 16
  },
})

export default SpecialistList
