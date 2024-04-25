import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createURL, useURL } from 'expo-linking'
import { Routes } from './app/screen';

const App = () => {
  const redirectURL = useURL();
  const url = createURL('game', {})
  console.log(">>>", url, "redirectURL>", redirectURL)
  return (
    <Routes />
  )
}

export default App

const styles = StyleSheet.create({})