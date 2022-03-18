import React, { useState, useEffect, useRef } from "react"
import { Text, View, Animated, useWindowDimensions } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'


const Paginator = ({ data, scrollX }) => {

    const { width } = useWindowDimensions()

    return (
        <View style={{ flexDirection: 'row' }}>
            {data.map((_, i) => {

                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })

                return <Animated.View style={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: colors.primary,
                    marginHorizontal: 5,
                    width: dotWidth,
                    opacity
                }} key={i.toString()} />
            })}
        </View>
    )
}

export default Paginator