import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackparamlist} from '../App';
import { TouchableOpacity } from 'react-native';


type ItemProps = {
  picture: string;
  index: number;
  age: number;
  firstname: string;
  surname: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
};

type Listprops = NativeStackScreenProps<RootStackparamlist, 'List'>;

const List = ({navigation}: Listprops): JSX.Element => {
  const [users, setusers] = useState<ItemProps[]>([]);
  const [filterusers, setfilterusers] = useState<ItemProps[]>([]);
  const [asc,setasc]= useState(false);
  const [searchquery, setsearchquery] = useState('');

  useEffect(() => {
    fetch('https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setusers(data);
        setfilterusers(data);
      });
  }, []);

  const handlesearch = (txt)=> {

    if(txt){
      const newdata=users.filter(
        function (item){
          const itemdata=item.firstname?item.firstname.toUpperCase():''.toUpperCase();
          const querydata=txt.toUpperCase();
          return itemdata.indexOf(querydata)>-1;
        }
      );
      setfilterusers(newdata);
      setsearchquery(txt);
    }else{
      setfilterusers(users);
      setsearchquery(txt);
    }
   
  };
const sortusers=()=>{
  setasc(!asc);

  let tempdata=[...users];
   if(asc){
  
    if(tempdata.length>0){
    let result= tempdata.sort((a,b)=>a.firstname.localeCompare(b.firstname));
    setfilterusers(result);
    }
   }else{
    
    if(tempdata.length>0){
    let result= tempdata.sort((a,b)=>b.firstname.localeCompare(a.firstname));
    setfilterusers(result);
    }
   }



 
}


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.serachbox}>
        <TouchableOpacity >
            <Image
              source={require('../assets/close.png')}
              style={{height: 20, width: 20,marginLeft:-20}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search here..."
            style={styles.searchBar}
            value={searchquery}
            placeholderTextColor="#000"
            onChangeText={(txt) => {
              handlesearch(txt);
            }}
            autoCorrect={false}
          />
           <TouchableOpacity
           onPress={sortusers}
           >
           <Image
              source={require('../assets/setting.png')}
              style={{height: 20, width: 20, marginLeft: 15}}
            />
           </TouchableOpacity>
         
        </View>
        <FlatList
          data={filterusers}
          keyExtractor={(item:ItemProps) => item.index}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('Profile', item)}>
              <View style={styles.listitem}>
                <View>
                  <Image style={styles.image} source={{uri: item.picture}} />
                </View>
                <View style={styles.textview}>
                  <Text style={styles.text}>
                    {item.firstname} {item.surname}
                  </Text>
                  <Text style={styles.textemail}>{item.email}</Text>
                  <Text style={styles.textmsg}>
                    Hey! there I am using whatsapp...
                  </Text>
                </View>
                <View>
                  <Text style={styles.time}>25:00pm</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  time: {
    fontSize: 12,
    color: '#D6D6D6',
  },
  serachbox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  searchBar: {
    fontSize: 18,
    paddingLeft:10,
    width: '70%',
    height: 50,
    color: 'black',

  },
  listitem: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 1,
    marginHorizontal: 3,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 2,
  },
  textview: {
    marginLeft: 10,
    marginRight: 20,
  },
  text: {
    fontSize: 17,
    color: '#202020',
  },
  textemail: {
    fontSize: 15,
    color: '#3C3C3C',
  },
  textmsg: {
    fontSize: 14,
    color: '#9E9BA1',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },

  item: {
    backgroundColor: '#535353',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
