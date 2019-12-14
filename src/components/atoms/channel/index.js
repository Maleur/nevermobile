import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const Channel = (props) => {
  return (
    <View style={[styles.container, props.isSeen && styles.containerSeen, props.isActive && styles.containerActive]}>
      <Image style={styles.image} source={{uri: props.uri}}></Image>
      <View>
        <Text numberOfLines={2} style={styles.title}>{props.name}</Text>
        {props.isSeen && <Text style={styles.subtitle}>All Watched</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
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
  containerSeen: {
    borderColor: theme.GREY_600,
    backgroundColor: theme.GREY_800
  },
  containerActive: {
    borderColor: theme.PRIMARY_500,
  },
  title: {
    color: theme.GREY_200,
    fontSize: 16
  },
  subtitle: {
    color: theme.GREY_300,
    fontSize: 12
  },
  image: {
    width: 26,
    height: 26,
  }
})

export default Channel
