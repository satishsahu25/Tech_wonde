import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackparamlist} from '../App';

type profileprops = NativeStackScreenProps<RootStackparamlist, 'Profile'>;


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


const Profile = ({route}: profileprops): JSX.Element => {
  const item = route.params;
  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri: item.picture}} style={styles.image} />
        <View>
          <Text style={styles.fname}>{item.firstname}</Text>
          <Text style={styles.lname}>{item.surname}</Text>
        </View>
        {/* other content */}
        <View style={styles.other}>
          <View style={styles.age}>
            <Text style={styles.details}> Age: </Text>
            <Text style={styles.detailvalue}>{item.age}</Text>
          </View>
          <View style={styles.age}>
            <Text style={styles.details}> Email: </Text>
            <Text style={styles.detailvalue}> {item.email}</Text>
          </View>
          <View style={styles.age}>
            <Text style={styles.details}> Phone: </Text>
            <Text style={styles.detailvalue}>{item.phone}</Text>
          </View>
          <View style={styles.age}>
            <Text style={styles.details}> Gender: </Text>
            <Text style={styles.detailvalue}>{item.gender}</Text>
          </View>
          <View style={styles.age}>
            <Text style={styles.details}> Company: </Text>
            <Text style={styles.detailvalue}>{item.company}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    paddingBottom:10,
    elevation:1,
    borderRadius:10,
    backgroundColor:"#F6F6F6",
    shadowOffset:{
      height:1,
      width:1
    }
  },
  other:{
    marginTop:10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 10,
  },
  age: {
    flexDirection: 'row',
  },
  fname: {
    color: '#131313',
    fontWeight: '700',
    fontSize: 25,
  },
  lname: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
  },
  details: {
    color: '#000000',
    fontSize: 15,
    fontWeight:'600'
  },
  detailvalue:{
    color: '#535353',
    fontSize: 15,
    fontWeight:'500'
  }
});
