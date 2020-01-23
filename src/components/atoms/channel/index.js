import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../../../assets/styles/theme.style'

export const Channel = (props) => {
  const { isSeen, isActive, uri, name } = props;

  return (
    <View style={[styles.container, isSeen && styles.containerSeen, isActive && styles.containerActive]}>
      <Image style={styles.image} source={{uri: uri}}></Image>
      <View>
        <Text numberOfLines={2} style={styles.title}>{name}</Text>
        {
          isSeen && <Text style={styles.subtitle}>All Watched</Text>
        }
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
