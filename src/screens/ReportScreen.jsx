import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




export default function ReportScreen() {
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
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ textTransform: 'uppercase', color: '#022857', fontWeight: '500', fontSize: 20 }}> configuracion del reporte</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="home-circle" size={30} color="#022857" />
                    <Ionicons name="information-circle-outline" size={30} color="#022857" />
                </View>
            </View>
            <View style={{ marginHorizontal: 50, gap: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: "50%", fontSize: 16 }}>Documento ID</Text>
                    <TextInput style={{
                        borderColor: '#022857',
                        borderWidth: 1,
                        margin: 1,
                        height: '100%',
                        width: '50%',
                        paddingLeft: 10,
                        borderRadius: 7,
                    }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: "50%", fontSize: 16 }}>Fecha de Inicio</Text>
                    <TextInput style={{
                        borderColor: '#022857',
                        borderWidth: 1,
                        margin: 1,
                        height: '100%',
                        width: '50%',
                        paddingLeft: 10,
                        borderRadius: 7,
                    }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: "50%", fontSize: 16 }}>Fecha de Finalización</Text>
                    <TextInput style={{
                        borderColor: '#022857',
                        borderWidth: 1,
                        margin: 1,
                        height: '100%',
                        width: '50%',
                        paddingLeft: 10,
                        borderRadius: 7,
                    }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: "50%", fontSize: 16 }}>Operador Antapacay</Text>
                    <TextInput style={{
                        borderColor: '#022857',
                        borderWidth: 1,
                        margin: 1,
                        height: '100%',
                        width: '50%',
                        paddingLeft: 10,
                        borderRadius: 7,
                    }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: "50%", fontSize: 16 }}>Turno</Text>
                    <TextInput style={{
                        borderColor: '#022857',
                        borderWidth: 1,
                        margin: 1,
                        height: '100%',
                        width: '50%',
                        paddingLeft: 10,
                        borderRadius: 7,
                    }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: "50%", fontSize: 16 }}>Supervisor Antapacay</Text>
                    <TextInput style={{
                        borderColor: '#022857',
                        borderWidth: 1,
                        margin: 1,
                        height: '100%',
                        width: '50%',
                        paddingLeft: 10,
                        borderRadius: 7,
                    }}>
                    </TextInput>
                </View>
            </View>
            <View>
                <View style={{ margin: 20, marginTop: 40 }}>
                    <Text style={{ textTransform: 'uppercase', color: '#022857', fontWeight: '500', fontSize: 20, marginBottom: 15 }}>informacion general de areas de espesamiento y filtrado de concentrado de cobre</Text>
                    <View style={{ borderBlockColor: '#022857', borderWidth: 1, borderRadius: 7, gap: 15, padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '50%', marginLeft: 30 }}>Cantidad de Filtros:</Text>
                            <TextInput style={{ width: '46%', marginRight: 30 }}>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '50%', marginLeft: 30 }}>Cantidad de Espesadores:</Text>
                            <TextInput style={{ width: '46%', marginRight: 30 }}>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '50%', marginLeft: 30 }}>TAG:</Text>
                            <TextInput style={{ width: '46%', marginRight: 30 }}>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '50%', marginLeft: 30 }}>Locacion:</Text>
                            <TextInput style={{ width: '46%', marginRight: 30 }}>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '50%', marginLeft: 30 }}>Material Procesado:</Text>
                            <TextInput style={{ width: '46%', marginRight: 30 }}>
                            </TextInput>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginHorizontal:30, marginTop:60}}>
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
                        backgroundColor: '#3b0d6b'
                    }}>
                    <MaterialCommunityIcons name="chevron-double-left" size={24} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Atras</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 300,
                        borderWidth: 1,
                        borderColor: '#3b0d6b',
                        width: 250,
                        height: 40,
                        paddingRight: 13,
                        paddingLeft: 13,
                        borderRadius: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#3b0d6b'
                    }}>
                    <FontAwesome name="check" size={24} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Validar Configuracion</Text>

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