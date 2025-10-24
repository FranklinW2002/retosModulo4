import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest, updateLaptopRest } from "../rest-client/laptop"



export const LaptopsFrom = ({ navigation, route }) => {
    let laptopRetrived = route.params.laptopParam;
    let isNew = true;
    if (laptopRetrived != null) {
        isNew = false;
    }
    console.log(laptopRetrived);

    const [marca, setMarca] = useState(isNew?null:laptopRetrived.marca);
    const [modelo, setModelo] = useState(isNew?null:laptopRetrived.modelo);
    const [procesador, setProcesador] = useState(isNew?null:laptopRetrived.procesador);

    
  
    if (laptopRetrived != null) {
        isNew = false;
    }

    const showMessage = () => {
        Alert.alert("Confirmacion", isNew ? "Laptop Guardado" : "Laptop Actualizado");
        navigation.goBack();
    }

    const saveLaptop = () => {
        console.log("Laptop guardada");

        saveLaptopRest(
            {
                marca: marca,
                modelo: modelo,
                procesador: procesador
            }, showMessage

        );
    }

    const updateLaptop=()=>{
        console.log("actualizando contacto");
            updateLaptopRest({
              id: laptopRetrived.id,
              marca: marca,
              modelo: modelo,
              procesador: procesador
        
            },
              showMessage)
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
            onPress={isNew?saveLaptop:updateLaptop}
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