import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
const LoadingScreen = () => {
    return(
        <View style={styles.container}>
           <Image
           source={require('../imagens/Logo.png')}
           />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F3FA'
    }
})
export default LoadingScreen;