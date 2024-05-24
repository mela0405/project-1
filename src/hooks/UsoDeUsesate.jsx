import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function UsoDeUsesate() {
    const [valor, setValor] = useState('')
    const [estructura, setEstructura] = useState({
        name: '',
        lastname: '',
        age: 0
    })
    
    const objeto = {
        name: '1',
        lastname: '22',
        age: 10
    }

    const copia = {...objeto}

  

    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30 }}>
            <Text>UsoDeUsesate</Text>
            {/* <TouchableOpacity onPress={() => { empezar() }} style={{ padding: 20, backgroundColor: 'blue', marginTop: 20 }}>
                <Text style={{ color: 'white' }}>Lanzar</Text>
            </TouchableOpacity> */}
            {/* <TextInput
                onChangeText={(text) => { setValor(text) }}
                style={{ padding: 10, borderWidth: 1 }}
            /> */}
            <Text>OTRO</Text>
            <TextInput
                onChangeText={(text) => { setValor(text) }}
                style={{ padding: 10, borderWidth: 1 }}
            />

            <Text>ESTE OTRO-- {valor}</Text>
            <Text>Nombre</Text>
            <TextInput
                onChangeText={(text) => { setEstructura({
                    ...estructura,
                    name:text
                }) }}
                style={{ padding: 10, borderWidth: 1 }}
            />
            <Text>Apellido</Text>
            <TextInput
                onChangeText={(text) => { setEstructura({
                    ...estructura,
                    lastname:text
                }
                ) }}
                style={{ padding: 10, borderWidth: 1 }}
            />
            <Text>Edad</Text>
            <TextInput
                onChangeText={(text) => { setEstructura({
                    ...estructura,
                    age:text
                }) }}
                style={{ padding: 10, borderWidth: 1 }}
            />

            <Text>Nombre, apellido - edad</Text>
            <Text>{estructura.name + ", " + estructura.lastname + " - " + estructura.age }</Text>
            {/* <Text>Aqui: {valor}</Text> */}

        </View>
    )
}