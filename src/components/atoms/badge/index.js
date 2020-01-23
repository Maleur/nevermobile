import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import theme from '../../../assets/styles/theme.style'

export const Badge = (props) => {
  const { isSeen, isActive, unseenCount } = props;

  function badgeContent() {
    if (isSeen) {
      return (
        <View stye={styles.iconContainer}>
          <Image style={styles.seenIcon} source={require('../../../assets/icons/check-mark.png')} />
        </View>
      )
    }
    return <Text style={styles.badgeText}> {unseenCount} </Text>
  }

  return (
    <View style={[styles.container, isActive && styles.containerActive]}>
      <View style={[styles.badge, isSeen && styles.badgeSeen, isActive && styles.badgeActive]}>
        {
          isActive && badgeContent()
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 12,
    top: 20,
    zIndex: 999
  },
  containerActive: {
    right: 8,
    top: 18
  },
  badge: {
    height: 16,
    minWidth: 0,
    width: 16,
    borderRadius: 50,
    backgroundColor: theme.PRIMARY_500,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.GREY_800,
  },
  badgeSeen: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  badgeActive: {
    height: 24,
    width: 24,
    backgroundColor: theme.PRIMARY_500,
    borderColor: theme.GREY_800,
  },
  badgeText: {
    color: theme.GREY_100,
    fontSize: 11,
    fontWeight: 'bold'
  },
  iconContainer: {
    position: 'absolute',
    right: 50,
    top: 16
  },
  seenIcon: {
    height: 10,
    width: 10
  }
});
