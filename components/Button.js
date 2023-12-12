import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { TouchableOpacity } from 'react-native'


const Button = (props) => {
    const filledBgColor = props.color ||  COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
      style={{
        ...styles.button,
        ...{backgroundColor: bgColor},
        ...props.style

      }}
        onPress={props.onPress}
        >
            <Text style={{fontSize: 30, ... { color: textColor } }}>{props.title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingButton:10,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
}
})
export default Button