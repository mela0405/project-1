import { View, Text, Image } from 'react-native'
import React from 'react'

export default function PrincipalScreen() {
    // asd
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ color: 'black', fontSize: 20 }}>Quimico Metalurgico</Text>
            <View style={{ width: 200, height: 200, marginBottom: 50 }}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../assets/img/img-quimica.png')}
                />
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20
            }}>
                <Text style={{ color: '#23356a', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 40 }}>Monitoreo de Condicion</Text>
                <Text style={{ color: '#717273', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 20, textAlign: 'center', width: '50%' }}>reporte de operaciones de espesamiento y filtrado de concentrado de cobre</Text>
                {/* <View style={{flexDirection:'column', alignItems:'flex-end',justifyContent:'flex-end'}}></View> */}
                <Text style={{ paddingTop: 250 }}>V.1.0</Text>

            </View>
        </View>
    )
}