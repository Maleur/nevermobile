import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../assets/styles/theme.style'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.GREY_800,
    padding: 16,
    paddingBottom: 4
  },
  title: {
    color: theme.GREY_200,
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default Header
