import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


export default function CicloScreen() {
    const buttonArray = [
        {
            id: 1,
            texto: 'Tiempo de Ciclo (min)',
            valor: ''
        },
        {
            id: 2,
            texto: 'Tonelaje (TM)',
            valor: ''
        },
        {
            id: 3,
            texto: '%h Humedad',
            valor: ''
        },
        {
            id: 4,
            texto: 'Filtrado (s)',
            valor: ''
        },
        {
            id: 5,
            texto: 'Prensado (s)',
            valor: ''
        },
        {
            id: 6,
            texto: 'Secados (s)',
            valor: ''
        },
        {
            id: 7,
            texto: 'Filtrado (bar)',
            valor: ''
        },
        {
            id: 8,
            texto: 'Prensado (bar)',
            valor: ''
        },
        {
            id: 9,
            texto: 'Secado (bar)',
            valor: ''
        },
        {
            id: 10,
            texto: 'Punto G (bar)',
            valor: ''
        },
    ]

    const [selectedLanguage, setSelectedLanguage] = useState();

    const [inputArray, setInputArray] = useState(buttonArray)

    const handleComments = (text, id) => {
        const temp = [...inputArray]
        const temR = temp.map((obj) => {
            if (obj.id == id) {
                return {
                    ...obj,
                    valor: text
                }
            } else {
                console.log(obj);
                return obj
            }
        })

        setInputArray(temR)
    }

    const [counter, setCounter] = useState(1)

    const onChangeTimes = (event, selectedDate, flagMethod) => {
        console.log(event);
        console.log(selectedDate);
        if (flagMethod == 'begin') {
            setStateAll({
                ...stateAll,
                valBegin: selectedDate,
                showBegin: false
            })
        } else {
            setStateAll({
                ...stateAll,
                valEnd: selectedDate,
                showEnd: false
            })
        }
    }

    const [stateAll, setStateAll] = useState({
        showBegin: false,
        showEnd: false,
        valBegin: new Date(),
        valEnd: new Date(),
    })
    const router = useNavigation()

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
                {/* <TouchableOpacity 
                
                style={{
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
                </TouchableOpacity> */}
                <View style={{
                    borderWidth: 1,
                    borderColor: '#e94927',
                    width: 150,
                    height: 80,
                    paddingRight: 13,
                    paddingLeft: 13,
                    marginLeft: 20,
                    borderRadius: 15,
                    backgroundColor: '#e94927'
                }}>
                    <Picker
                        mode='dropdown'
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <Text style={{
                    borderWidth: 1,
                    borderColor: '#7623cc',
                    width: 150,
                    height: 60,
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#7623cc'
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>CICLO {counter}</Text>
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
                            <TouchableOpacity
                                onPress={() => {
                                    setStateAll({
                                        ...stateAll,
                                        showBegin: true
                                    })
                                }}
                                style={{
                                    backgroundColor: 'white', paddingHorizontal: 10,
                                    borderRadius: 10
                                }}>
                                <Text>{stateAll.valBegin.toTimeString().split(':')[0] + ":" + stateAll.valBegin.toTimeString().split(':')[1]}</Text>
                                {/* <Text>{begin.toTimeString().split(':')[0] + ":" + begin.toTimeString().split(':')[1]}</Text> */}
                            </TouchableOpacity>
                            {/* <TextInput style={{
                                backgroundColor: 'white', paddingHorizontal: 10,
                                borderRadius: 10
                            }} /> */}
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
                            <TouchableOpacity onPress={() => {
                                setStateAll({
                                    ...stateAll,
                                    showEnd: true
                                })
                            }}
                                style={{
                                    backgroundColor: 'white', paddingHorizontal: 10,
                                    borderRadius: 10
                                }}>

                                <Text>{stateAll.valEnd.toTimeString().split(':')[0] + ":" + stateAll.valEnd.toTimeString().split(':')[1]}</Text>
                            </TouchableOpacity>
                            {/* <TextInput style={{
                                backgroundColor: 'white', paddingHorizontal: 10,
                                borderRadius: 10
                            }} /> */}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderColor: '#23356a' }}>
                        {/* {
                            buttonArray.map((obj,index)=>{
                                const itemFiltrado = index > 2 ? '' : obj
                                return(
                                    <Text>{itemFiltrado.texto}</Text>
                                )
                            })
                        } */}
                        {
                            inputArray.filter((obj, index) => index < 3).map((obj2, index2) => {
                                return (
                                    <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                                        <Text style={{
                                            borderWidth: 1,
                                            borderRadius: 7,
                                            width: '100%',
                                            textAlign: 'center',
                                            padding: 4,
                                            backgroundColor: '#23356a',
                                            color: 'white'
                                        }}>{obj2.texto}</Text>
                                        <TextInput
                                            value={obj2.valor}
                                            onChangeText={(text) => handleComments(text, obj2.id)}
                                            style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 30 }}>TIEMPOS (segundos)</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderColor: '#23356a' }}>
                        {
                            inputArray.filter((obj, index) => index >= 3 && index <= 5).map((obj3, index2) => {
                                return (
                                    <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                                        <Text style={{
                                            borderWidth: 1,
                                            borderRadius: 7,
                                            width: '100%',
                                            textAlign: 'center',
                                            padding: 4,
                                            backgroundColor: '#23356a',
                                            color: 'white'
                                        }}>{obj3.texto}</Text>
                                        <TextInput
                                            value={obj3.valor}
                                            onChangeText={(text) => handleComments(text, obj3.id)}
                                            style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                                    </View>
                                )
                            })

                        }
                    </View>

                    <Text style={{ fontWeight: 'bold', marginTop: 30 }}>PRESION (bar)</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderColor: '#23356a' }}>
                        {
                            inputArray.filter((obj, index) => index > 5 && index <= 8).map((obj4, index2) => {
                                return (
                                    <View style={{ flexDirection: 'column', width: 150, justifyContent: 'center' }}>
                                        <Text style={{
                                            borderWidth: 1,
                                            borderRadius: 7,
                                            width: '100%',
                                            textAlign: 'center',
                                            padding: 4,
                                            backgroundColor: '#23356a',
                                            color: 'white'
                                        }}>{obj4.texto}</Text>
                                        <TextInput
                                            value={obj4.valor}
                                            onChangeText={(valor) => handleComments(valor, obj4.id)}
                                            style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
                                    </View>
                                )
                            })
                        }
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
                                }}>{inputArray[inputArray.length - 1].texto}</Text>
                                <TextInput
                                    value={inputArray[inputArray.length - 1].valor}
                                    onChangeText={(text) => handleComments(text, 10)}
                                    style={{ borderWidth: 1, borderRadius: 7, textAlign: 'center' }} />
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
                    <View style={{ borderWidth: 1, borderRadius: 10, flex: 1, padding: 10, gap: 8, margin: 5 }}>
                        {
                            inputArray.map((obj, index) => {
                                return (
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>{obj.texto}</Text>
                                        <Text
                                            style={{
                                                borderWidth: 1,
                                                borderRadius: 7,
                                                width: 120,
                                                textAlign: 'center',
                                                backgroundColor: '#c6c6c6',
                                                borderColor: '#23356a',
                                                color: 'black',
                                                padding: 5
                                            }}>
                                            {obj.valor}
                                            {/* onChangeText={()=> {
                                                setValor({
                                                    ...valor,
                                                    valor:text
                                                })
                                            }} */}
                                        </Text>

                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 30, marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        if (counter > 1) {
                            setCounter(counter - 1)
                        } else {
                            router.navigate('continue')
                        }
                    }}
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
                    onPress={() => {
                        setCounter(counter + 1)
                    }}
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
            {
                stateAll.showBegin == true ? <DateTimePicker
                    testID="dateTimePicker"
                    value={stateAll.valBegin}
                    mode={'time'}
                    is24Hour={true}
                    onChange={(e, selDate) => {
                        onChangeTimes(e, selDate, 'begin')
                    }}
                /> : null
            }
            {
                stateAll.showEnd == true ? <DateTimePicker
                    testID="dateTimePicker"
                    value={stateAll.valEnd}
                    mode={'time'}
                    is24Hour={true}
                    onChange={(e, selDate) => {
                        onChangeTimes(e, selDate, 'end')
                    }}
                /> : null
            }


        </ScrollView>

    )
}