import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const Channel = (props) => {
  return (
    <View style={[styles.container, props.isActive && styles.containerActive]}>
      <Image style={styles.image} source={{uri: props.uri}}></Image>
      <View>
        <Text style={styles.title}>{props.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    backgroundColor: theme.GREY_600,
    width: 110,
    height: 110,
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  containerActive: {
    borderColor: theme.PINK_500,
  },
  title: {
    color: theme.GREY_200,
    fontSize: 16,
  },
  image: {
    width: 26,
    height: 26,
  }
})

export default Channel
