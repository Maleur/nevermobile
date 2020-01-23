import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../assets/styles/theme.style'

export const Header = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 4
  },
  title: {
    color: theme.GREY_200,
    fontWeight: 'bold',
    fontSize: 18
  }
})
