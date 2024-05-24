import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Formulario() {

    const initialComments = [
        {
            texto: ''
        },
    ]



    const [comments, setComments] = useState(initialComments)

    const inicialContent = {
        name: '',
        phonenumber: '',
    }
    const [variable, setVariable] = useState(inicialContent)


    const handleComments = (text, index) => {
        // console.log(text)
        console.log("index: " + index + " -> ", text)
        const temp = [...comments]
        temp[index].texto = text
        setComments(temp)


    }

    console.log(comments)

    const addComment = () => {
        const temp = [...comments]
        temp.push({
            texto: ''
        })
        setComments(temp)

    }

    const deleteComment = () => {
        const temp = [...comments]
        temp.splice(-1)
        setComments(temp)
    }

    const toInitial = () => {
        setVariable(inicialContent)
        setComments(initialComments)
    }

    return (
        <View style={{}}>
            <View style={{
                width: '100%',
                flexDirection: 'row'

            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    width: '50%',
                    padding: 30,

                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 40
                    }}> REQUEST AND   APPOINTMENT</Text>
                </View>
                <View style={{
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: 100,
                    backgroundColor: '#74cbc9',
                    borderColor: '#74cbc9',
                    marginTop: 25
                }}>
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <Text>Name</Text>
                <View style={{
                    margin: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    // backgroundColor: 'red',
                }}>
                    <TextInput
                        value={variable.name}
                        onChangeText={(text) => {
                            setVariable({
                                ...variable,
                                name: text
                            })
                        }}
                        style={{
                            flex: 0.5,
                            borderWidth: 1,
                            borderRadius: 10,
                            padding: 10
                        }} />
                    <TextInput

                        value={variable.name}
                        onChangeText={(text) => {
                            setVariable({
                                ...variable,
                                name: text
                            })
                        }} style={{
                            flex: 0.5,
                            borderWidth: 1,
                            borderRadius: 10,
                            padding: 10
                        }} />
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <Text>Phone Number</Text>
                <View style={{
                    margin: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    // backgroundColor: 'red',
                }}>
                    <TextInput
                        value={variable.phonenumber}
                        onChangeText={(text) => {
                            setVariable({
                                ...variable,
                                phonenumber: text
                            })
                        }} style={{
                            flex: 0.5,
                            borderWidth: 1,
                            borderRadius: 10,
                            padding: 10
                        }} />
                    <TextInput style={{
                        flex: 0.5,
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 10
                    }} />
                </View>
            </View>
            <View style={{
                margin: 20
            }}>
                <Text>First time visit</Text>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 100,
                    height: 40,
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    borderRadius: 20,
                    marginTop: 10,
                    padding: 10
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center'
                    }}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 100,
                    height: 40,
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    borderRadius: 20,
                    marginTop: 10,
                    // margin:10,
                    padding: 10
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center'
                    }}>No</Text>
                </TouchableOpacity>
            </View>
            <Text style={{
                textAlign: 'left',
                // margin: 20,
                marginTop: 0
            }}>COMMENTS</Text>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                width: 600,
                height: 300,
                margin: 20,
                position: 'relative',
                gap: 10
            }}>

                {
                    comments.map((obj, index) => {
                        return (
                            <TextInput
                                value={obj.texto}
                                onChangeText={(text) => handleComments(text, index)}
                                style={{ borderWidth: 1, padding: 10 }} />
                        )
                    })
                }
                <View style={{
                    position: 'absolute',
                    top: 5,
                    right: 4,
                    gap: 4,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity
                        onPress={() => addComment()}
                        style={{
                            backgroundColor: 'blue',
                            width: 100,
                            height: 50,

                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: 'white' }}>AGREGAR</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => deleteComment()}
                        style={{
                            backgroundColor: 'gray',
                            width: 100,
                            height: 50,

                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: 'white' }}>ELIMINAR</Text>

                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <TouchableOpacity
                    onPress={() => { toInitial() }}
                    style={{
                        // flex: 0.4,
                        borderWidth: 1,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        borderRadius: 8,
                        width: 150,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'flex-end'


                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', padding: 10, textAlign: 'center' }}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}