import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MenuScreen() {
    const router = useNavigation()
    const buttonArray = [
        {
            id: 1,
            name: 'Configurar nuevo reporte',
            icon: <Entypo name="plus" size={30} color="white" />,
            color: '#23356a',
            toGo:'report'
        },
        {
            id: 2,
            name: 'Realizar o continuar reporte ',
            icon: <Feather name="arrow-right" size={24} color="white" />,
            color: '#7623cc',
            toGo:'continue'
        },
        {
            id: 3,
            name: 'reportes anteriores',
            icon: <AntDesign name="arrowleft" size={24} color="white" />,
            color: '#e94927'
        },
        {
            id: 4,
            name: 'tendencias historicas ',
            icon: <MaterialCommunityIcons name="finance" size={24} color="white" />,
            color: '#737373'
        },
    ]
    return (
        <View style={{ width: '100%', height: '100%' }}>
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
            <View style={{ position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 10 }}>
                {
                    buttonArray.map((obj) => {
                        return (
                            <TouchableOpacity 
                            onPress={()=>{
                                router.navigate(obj.toGo)
                            }}    
                            style={{
                                backgroundColor: obj.color,
                                borderColor: obj.color,
                                width: 400,
                                height: 50,
                                flexDirection: 'row',
                                borderRadius: 5,
                                padding: 10,
                                alignItems: 'center'
                            }}>
                                {/* <Entypo name="plus" size={30} color="white" /> */}
                                {obj.icon}
                                <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 20 }}> {obj.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={{ position: 'absolute', right: '8%', top:'32%' }}>
                    <Ionicons name="information-circle-outline" size={40} color="black" />
                </View>
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
                gap: 400
            }}>
                <Fontisto name="nav-icon-a" size={24} color="#23356a" />
                <FontAwesome name="cog" size={30} color="#23356a" />
            </View>

        </View>

    )
}