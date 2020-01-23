import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Badge } from '../badge'
import theme from '../../../assets/styles/theme.style'

export const SpecialChannel = (props) => {
  const { isSeen, isActive, unseenCount, uri, name } = props;
  return (
    <View style={styles.container}>
      <Badge isSeen={isSeen} isActive={isActive} unseenCount={unseenCount} />
      <View style={[styles.icon, isSeen && styles.iconSeen, isActive && styles.iconActive]}>
        <Image style={styles.image} source={{uri: uri}}></Image>
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
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
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  iconSeen: {
    borderColor: theme.GREY_600,
    backgroundColor: theme.GREY_800
  },
  iconActive: {
    borderColor: theme.PRIMARY_500
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
