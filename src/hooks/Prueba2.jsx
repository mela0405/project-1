import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Prueba2() {
    const [variable, setVariable] = useState()
    const initialState = {
        nombre: '',
        apellido: '',
        edad: 0
    }
    const [estructura, setEstructura] = useState(initialState)
    const funcion = () => {
        setEstructura(initialState)
    }
    const buttonArray = [
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
        {
            texto: 'caminar'
        },
    ]
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 150 }}>
            <Text>Mis Datos</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ gap: 10, marginTop: 50 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Nombre:</Text>
                        <TextInput
                            value={estructura.nombre}
                            onChangeText={(text) => {
                                setEstructura({
                                    ...estructura,
                                    nombre: text
                                })
                            }}
                            style={{ borderWidth: 1, padding: 10, margin: 10 }}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Apellido:</Text>
                        <TextInput
                            value={estructura.apellido}
                            onChangeText={(text) => {
                                setEstructura({
                                    ...estructura,
                                    apellido: text
                                })
                            }}
                            style={{ borderWidth: 1, padding: 10, margin: 10 }}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Edad:</Text>
                        <TextInput
                            value={estructura.edad}
                            onChangeText={(text) => {
                                setEstructura({
                                    ...estructura,
                                    edad: text
                                })
                            }}
                            style={{ borderWidth: 1, padding: 10, margin: 10 }}></TextInput>
                    </View>
                </View>
                <View style={{ width: 150, height: 150 }}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../assets/img/equipo2.png')}
                    />
                </View>
            </View>
            <View style={{
                borderWidth: 1,
                width: '100%',
                height: 500,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: 20
            }}>
                <Text>Hobbies:</Text>
                <View style={{flexDirection:'column'}}>
                    {
                        buttonArray.map((obj, index) => {
                            return (
                                <Text>{obj.texto}</Text>
                            )
                        })
                    }
                </View>




            </View>
            <View style={{ flexDirection: 'row', gap: 200 }}>
                <TouchableOpacity
                    disabled={true}
                    onPress={() => { console.log(estructura) }}
                    style={{
                        width: 200,
                        borderWidth: 1,
                        borderColor: '#3b0d6b',
                        marginTop: 50,
                        width: 100,
                        height: 50,
                        padding: 5,
                        borderRadius: 7,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#3b0d6b'
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>GUARDAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { funcion() }}
                    style={{
                        width: 200,
                        borderWidth: 1,
                        borderColor: '#3b0d6b',
                        marginTop: 50,
                        width: 100,
                        height: 50,
                        padding: 5,
                        borderRadius: 7,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#3b0d6b'
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>CANCELAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}