import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest } from "../rest-client/laptop"

const showMessage = () => {
    Alert.alert("Confirmacion", "Contacto Guardado")
}

export const LaptopsFrom = ({navigation}) => {
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [procesador, setProcesador] = useState();

    const saveLaptop = () => {
        console.log("Laptop guardada");
        navigation.goBack();
        saveLaptopRest(
            {
                marca: marca,
                modelo: modelo,
                procesador: procesador
            },showMessage
            
        );
    }
    return <View style={styles.container}>
        <Text>Formulario de laptops</Text>
        <Input
            value={marca}
            placeholder='Marca'
            onChangeText={(value) => {
                setMarca(value);
            }}
        />
        <Input
            value={modelo}
            placeholder="Modelo"
            onChangeText={(value) => {
                setModelo(value);
            }}
        />
        <Input
            value={procesador}
            placeholder="Procesador"
            onChangeText={(value) => {
                setProcesador(value);
            }}
        />
        <Button
            title="Guardar"
            onPress={saveLaptop}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})