import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CicloScreen() {
    const buttonArray = [
        {
            texto: 'Tiempo de Ciclo (min)'
        },
        {
            texto: 'Tonelaje (TM)'
        },
        {
            texto: '%h Humedad'
        },
        {
            texto: 'Filtrado (s)'
        },
        {
            texto: 'Prensado (s)'
        },
        {
            texto: 'Secados (s)'
        },
        {
            texto: 'Filtrado (bar)'
        },
        {
            texto: 'Prensado (bar)'
        },
        {
            texto: 'Secado (bar)'
        },
        {
            texto: 'Punto G (bar)'
        },
    ]
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
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
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ textTransform: 'uppercase', color: '#022857', fontWeight: '500', fontSize: 20 }}> registro de reporte de operaciones</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="home-circle" size={30} color="#022857" />
                    <Ionicons name="information-circle-outline" size={30} color="#022857" />
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
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
                <Text style={{
                    borderWidth: 1,
                    borderColor: '#7623cc',
                    width: 150,
                    height: 60,
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#7623cc'
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>CICLO 2</Text>
                </Text>
                <Text style={{
                    borderWidth: 1,
                    borderColor: '#ffc138',
                    width: 150,
                    height: 40,
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#ffc138',
                    marginRight: 20
                }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, textTransform: 'uppercase' }}>filtro larox-01</Text>
                </Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 0.7, height: '100%', borderRightWidth: 1, padding: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>HORA:</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{
                            borderColor: '#e4cbff',
                            width: 175,
                            height: 35,
                            borderRadius: 20,
                            backgroundColor: '#e4cbff',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            padding: 5,
                            gap: 5
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 15
                            }}> Inicio Ciclo:
                            </Text>
                            <TextInput style={{
                                backgroundColor: 'white', paddingHorizontal: 10,
                                borderRadius: 10
                            }} />
                        </View>
                        <View style={{
                            borderColor: '#e4cbff',
                            width: 175,
                            height: 35,
                            borderRadius: 20,
                            backgroundColor: '#e4cbff',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            padding: 5,
                            gap: 5
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 15
                            }}> Fin Ciclo:
                            </Text>
                            <TextInput style={{
                                backgroundColor: 'white', paddingHorizontal: 10,
                                borderRadius: 10
                            }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderColor: '#23356a' }}>
                        <View style={{ width: 150, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{
                                width: '100%',
                                borderWidth: 1,
                                borderRadius: 7,
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Tiempo de ciclo (min)</Text>
                            <TextInput style={{ width: '100%', borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Tonelaje (TM)</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>% Humedad</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 30 }}>TIEMPOS (segundos)</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: '#23356a', }}>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Filtrado </Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Prensado</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Secado</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 30 }}>PRESION (bar)</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: '#23356a', }}>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Filtrado</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,

                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Prensado</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                        <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                            <Text style={{
                                borderWidth: 1,
                                borderRadius: 7,
                                width: '100%',
                                textAlign: 'center',
                                padding: 4,
                                backgroundColor: '#23356a',
                                color: 'white'
                            }}>Secado</Text>
                            <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 30 }}>PUNTO G</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 0.4 }}>
                            <View style={{ width: 150, height: 150 }}>
                                <Text style={{
                                    borderWidth: 1,
                                    borderRadius: 7,
                                    width: '100%',
                                    textAlign: 'center',
                                    padding: 4,
                                    backgroundColor: '#23356a',
                                    color: 'white'
                                }}>(bar)</Text>
                                <TextInput style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                            </View>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Image
                                style={{ width: 220, height: 220, objectFit: 'contain' }}
                                source={require('../../assets/img/Diagrama_Filtro_Larox.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.3, height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        borderWidth: 1,
                        borderRadius: 7,
                        width: 150,
                        textAlign: 'center',
                        padding: 4,
                        backgroundColor: '#717273',
                        borderColor: '#717273',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>PROMEDIOS</Text>
                    <View style={{ borderWidth: 1,borderRadius:10,  flex:1, padding:10, gap:8, margin:5}}>
                        {
                            buttonArray.map((obj) => {
                                return (
                                    <View style={{justifyContent:'center', alignItems:'center'}}>
                                        <Text>{obj.texto}</Text>
                                        <TextInput style={{
                                            borderWidth: 1,
                                            borderRadius: 7,
                                            width: 120,
                                            textAlign: 'center',
                                            backgroundColor: '#c6c6c6',
                                            borderColor: '#23356a',
                                            color: 'black',
                                        }} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 30, marginTop: 20 }}>
                <TouchableOpacity
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
                        backgroundColor: '#3b0d6b',
                        marginBottom: 20
                    }}>
                    <MaterialCommunityIcons name="chevron-double-left" size={24} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Atras</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100,
                        borderWidth: 1,
                        borderColor: '#3b0d6b',
                        width: 200,
                        height: 40,
                        paddingRight: 13,
                        paddingLeft: 13,
                        borderRadius: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#3b0d6b',
                        marginBottom: 20
                    }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Siguiente Ciclo</Text>
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
                bottom: 0
            }}>
                <Fontisto name="nav-icon-a" size={24} color="#022857" />
                <FontAwesome5 name="cog" size={24} color="#022857" />
            </View>
        </ScrollView>

    )
}