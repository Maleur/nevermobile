import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SpecialChannel from '../../atoms/specialChannel'
import Header from '../../atoms/header'
import theme from '../../../assets/styles/theme.style'
import specials from '../../../assets/samples/specialData'

const SpecialistList = () => {
  return (
    <View>
      <Header title={'Specials'}/>
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
        {
          specials.map((value, key) => {
            return <SpecialChannel name={value.name} uri={value.icon} key={key} />
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
