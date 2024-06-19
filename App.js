import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, FlatList } from 'react-native';

function LoginScreen({navigation}) {
  
  return (
    
    
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
      <View style={styles.jobizzContainer}>
          <Image source={require('./assets/Jobizz.jpg')} />
        </View>
        <View style={styles.group46Container}>
          <Image source={require('./assets/Group 46.jpg')} />
        </View>
        </View>
        </ScrollView>
        );
     }