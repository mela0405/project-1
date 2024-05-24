import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Prueba() {
    const initialState = {
        first: '',
        last: '',
        dia: '',
        mes: '',
        age: '',
        razon: '',
        diagnostico: '',
        descripcion: '',

    }
    const [variable, setVariable] = useState(initialState)

    const [counter, setCounter] = useState(0)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                // backgroundColor:'red',
                width: '50%',
                justifyContent: 'flex-start',
                alignItems: 'center',

            }}>
                <View>
                    <Text style={{ color: '#669cd4', fontWeight: 'bold', fontSize: 40 }}>AvionHealth</Text>
                </View>
                <View style={{
                    backgroundColor: '#f0f5fa',
                    width: '100%',
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20

                }}>
                    <Text style={{ fontSize: 18 }}>Patient Discharge Form </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: 20,
                    gap: 10
                }}>
                    <View style={{ flexDirection: 'column', width: '50%' }}>
                        <Text>First Name </Text>
                        <TextInput
                            value={variable.first}
                            onChangeText={(text) => {
                                setVariable({
                                    ...variable,
                                    first: text
                                })
                            }}
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '100%',
                                borderColor: '#dee0e2',
                                padding: 10,
                                margin: 5,
                                color: 'red'
                            }}>
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'column', width: '50%' }}>
                        <Text> Last Name </Text>
                        <TextInput
                            value={variable.last}
                            onChangeText={(text) => {
                                setVariable({
                                    ...variable,
                                    last: text
                                })
                            }}
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '100%',
                                borderColor: '#dee0e2',
                                padding: 10,
                                margin: 5,
                                color: 'blue'
                            }}>
                        </TextInput>
                    </View>

                </View>
                <View style={{ width: '100%', padding: 20 }}>
                    <Text>Date of Admitance</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                        <TextInput
                            value={variable.dia}
                            onChangeText={(text) => {
                                setVariable({
                                    ...variable,
                                    dia: text
                                })
                            }}
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#dee0e2',
                                margin: 5,
                                padding: 10,
                                width: '33%',
                                textAlign: 'center'
                            }} />
                        <TextInput
                            value={variable.mes}
                            onChangeText={(text) => {
                                setVariable({
                                    ...variable,
                                    mes: text
                                })
                            }}
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#dee0e2',
                                margin: 5,
                                padding: 10,
                                width: '33%',
                                textAlign: 'center'
                            }} />
                        <TextInput
                            value={variable.age}
                            onChangeText={(text) => {
                                setVariable({
                                    ...variable,
                                    age: text
                                })
                            }}
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#dee0e2',
                                margin: 5,
                                padding: 10,
                                width: '33%',
                                textAlign: 'center'
                            }} />

                    </View>

                </View>
                <View style={{ width: '100%', padding: 20 }}>
                    <Text>Reason for Admitance</Text>
                    <TextInput
                        value={variable.razon}
                        onChangeText={(text) => {
                            setVariable({
                                ...variable,
                                razon: text
                            })
                        }}
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '100%',
                            borderColor: '#dee0e2',
                            margin: 5,
                            padding: 10,
                            textAlign: 'center'
                        }}>
                    </TextInput>
                </View>
                <View style={{ width: '100%', padding: 20 }}>
                    <Text>Diagnostic of Admitance</Text>
                    <TextInput
                        value={variable.diagnostico}
                        onChangeText={(text) => {
                            setVariable({
                                ...variable,
                                diagnostico: text
                            })
                        }}
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '100%',
                            borderColor: '#dee0e2',
                            margin: 5,
                            padding: 10,
                            textAlign: 'center'
                        }}>
                    </TextInput>
                </View>
                <View style={{ width: '100%', padding: 20 }}>
                    <Text>Describe the treatment</Text>
                    <TextInput
                        value={variable.descripcion}
                        onChangeText={(text) => {
                            setVariable({
                                ...variable,
                                descripcion: text
                            })
                        }}
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '100%',
                            height: 100,
                            borderColor: '#dee0e2',
                            margin: 5,
                            padding: 10,
                            textAlign: 'center'
                        }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity
                        onPress={() => { console.log(variable) }}
                        style={{
                            flex: 0.4,
                            borderWidth: 1,
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                            borderRadius: 8

                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', padding: 10, textAlign: 'center' }}>GUARDAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setVariable(initialState) }}
                        style={{
                            flex: 0.4,
                            borderWidth: 1,
                            backgroundColor: 'red',
                            borderColor: 'red',
                            borderRadius: 8

                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', padding: 10, textAlign: 'center' }}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TouchableOpacity 
            onPress={()=>{setCounter(counter+1)}}
            
            style={{ marginTop: 20, padding: 20, backgroundColor: 'gray' }}>
                <Text>ARPETA</Text>
            </TouchableOpacity>

            <Text>Contador: {counter}</Text>
        </View>
    )
}