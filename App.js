import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

const dados = ([
  {
    id:1,
    nome: "playlist volume"
  },
  {
    id:2,
    nome:"playlist sou cantora",
  },
  {
    id:3,
    nome:"playlist sad",
  },
  {
    id:4,
    nome:"playlist lari",
  },
  {
    id:5,
    nome:"playlist pop",
  },
  {
    id:6,
    nome: "playlist nacional"
  },
  {
    id:7,
    nome:"playlist internacional",
  },
  {
    id:8,
    nome:"playlist clássica",
  },
  {
    id:9,
    nome:"playlist mpb",
  },
  {
    id:10,
    nome:"playlist mais ouvidas",
  },

]);

export default function App() {
  const renderItemAgenda = ({item})=>(
    <View style={styles.containerItem}>
      <View style={styles.containerItemImagem}>
       <Image 
            style={styles.containerItemImagem}
            />
      </View>
      <View>
        <Text>{item.nome}</Text>
      </View>
      
    </View>
  );
  return (
    <View style={styles.container}>
    <View style={styles.containerViewAgenda}>
    <Text>Agenda</Text>
    </View>
      <View style={styles.containerView}>
      <FlatList style={styles.teste}
        data={dados}
        keyExtractor={(item)=>item.id}
        renderItem={renderItemAgenda}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerView: {
    flex:1,
    //backgroundColor: 'red',
  },
  containerItem: {
    //height:60,
    flexDirection:'row',
    backgroundColor: 'white',
    marginBottom:8,
    alignItems:'center',
    //justifyContent:'space-between',
    paddingHorizontal:30,
  },
  containerItemImagem: {
    height:50,
    width:50,
    //backgroundColor: 'blue',
    borderRadius:50,
    marginRight:15,
  },

  teste: {
    flex: 1,
    backgroundColor: "red",

  }
});

