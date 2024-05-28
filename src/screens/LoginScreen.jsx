import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const router = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontSize: 20 }}>Quimico Metalurgico</Text>
      <View style={{ width: 200, height: 200, marginBottom: 50 }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../assets/img/img-quimica.png')}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 300
      }}>
        <FontAwesome5 name="user-alt" size={18} color="#3b0d6b" />
        <Text color="#3b0d6b"> Usuario:</Text>
      </View>
      <TextInput
        style={{
          borderColor: '#d7cedf',
          borderWidth: 1,
          width: 300,
          height: 50,
          margin: 5,
          padding: 15,
          borderRadius: 7,
          marginBottom: 20,
          backgroundColor: '#d7cedf'
        }}
        // secureTextEntry={true}
        onChangeText={(val) => console.log("ESCRIbí: -> ", val)}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 300
      }}>
        <Fontisto name="locked" size={18} color="#3b0d6b" />
        <Text color="#3b0d6b">  Contraseña :</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 300,

        height: 50,
      }}>
        <TextInput
          style={{
            borderColor: '#d7cedf',
            borderWidth: 1,
            margin: 5,
            height: '100%',
            width: 300,
            padding: 15,
            borderRadius: 7,
            backgroundColor: '#d7cedf'
          }}
          secureTextEntry={true}
          onChangeText={(val) => console.log("ESCRIbí: -> ", val)}
        />

      </View>
      <TouchableOpacity 
      onPress={()=> router.navigate('menu')}
      style={{
        width: 200,
        borderWidth: 1,
        borderColor: '#3b0d6b',
        marginTop: 50,
        width: 300,
        height: 50,
        padding: 5,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3b0d6b'
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>ingresar</Text>
        <MaterialCommunityIcons name="chevron-double-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});