import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>About</Text>
      <Text>To-Do List App</Text>
      <Text>By Samarpan Magar</Text>
      <Text>Date: {currentDate}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
