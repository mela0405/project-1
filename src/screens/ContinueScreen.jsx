import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ContinueScreen() {
  
  const buttonArray = [
    {
      imagen: require('../../assets/img/equipo1.png'),
      name: 'Filtro Larox-01 (0360-FL-0001)'
    },
    {
      imagen: require('../../assets/img/equipo2.png'),
      name: 'Filtro Larox-02 (0360-FL-0002)'
    },
    {
      imagen: require('../../assets/img/equipo3.png'),
      name: 'Filtro Larox-03 (0360-FL-0003)'
    }
  ]

  const router = useNavigation()

  return (
    <View style={{ width: '100%', height: '100%', position: 'relative' }}>
      <View
        style={{
          backgroundColor: '#3b0d6b',
          padding: 30,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10
        }}>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Analisis Quimico Metalurgico</Text>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Area: Espesamiento y Filtrado de Concentrado de Cobre</Text>
        <Text
          style={{
            color: '#3f5979',
            backgroundColor: '#c6c6c6',
            borderRadius: 15,
            borderBlockColor: '#c6c6c6',
            width: 350,
            marginTop: 15,
            padding: 3
          }}> Reporte de Operaciones de Espesamiento y Filtrado</Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ textTransform: 'uppercase', color: '#022857', fontWeight: '500', fontSize: 20 }}>  seleccionar equipo para registro </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons name="home-circle" size={30} color="#022857" />
          <Ionicons name="information-circle-outline" size={30} color="#022857" />
        </View>
      </View>
      <TouchableOpacity style={{
        width: 100,
        borderWidth: 1,
        borderColor: '#e94927',
        width: 120,
        height: 40,
        paddingRight: 13,
        paddingLeft: 13,
        marginLeft: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e94927'
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>TURNO "A"</Text>
      </TouchableOpacity>
      <View style={{ marginHorizontal: 50, marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 50, flexWrap: 'wrap' }}>

        {
          buttonArray.map((item) => {
            return (
              <View style={{ width: 250, height: 250 }}>
                <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    source={item.imagen}>
                  </Image>
                </View>
                <TouchableOpacity style={{
                  borderColor: '#d7cedf',
                  backgroundColor: '#d7cedf',
                  borderWidth: 1,
                  borderRadius: 15,
                }}>
                  <Text style={{
                    marginHorizontal: 20,
                    marginTop: 4,
                    padding: 8,
                    textAlign: 'center',
                    fontWeight: '500'
                  }}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 30, marginTop: 120 }}>
        <TouchableOpacity
        onPress={()=>router.navigate('menu')}
          style={{
            width: 100,
            borderWidth: 1,
            borderColor: '#3b0d6b',
            width: 150,
            height: 40,
            paddingRight: 13,
            paddingLeft: 13,
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#3b0d6b'
          }}>
          <MaterialCommunityIcons name="chevron-double-left" size={24} color="white" />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Atras</Text>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>router.navigate('ciclo')}
          style={{
            width: 100,
            borderWidth: 1,
            borderColor: '#3b0d6b',
            width: 150,
            height: 40,
            paddingRight: 13,
            paddingLeft: 13,
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#3b0d6b'
          }}>

          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Siguiente</Text>
          <MaterialCommunityIcons name="chevron-double-right" size={24} color="white" />

        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#c6c6c6',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 400,
        position: 'absolute',
        bottom: 0
      }}>
        <Fontisto name="nav-icon-a" size={24} color="#022857" />
        <FontAwesome5 name="cog" size={24} color="#022857" />
      </View>
    </View>
  )
}