import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const SpecialChannel = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image style={styles.image} source={{uri: props.uri}}></Image>
      </View>
      <View>
        <Text style={styles.title}>{props.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.GREY_800,
    width: 88,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    width: 64,
    height: 64,
    padding: 18,
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 50,
    backgroundColor: theme.GREY_600,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: theme.GREY_200,
    fontSize: 12,
    padding: 0,
    margin: 0
  },
  image: {
    width: 26,
    height: 26,
  }
})

export default SpecialChannel
