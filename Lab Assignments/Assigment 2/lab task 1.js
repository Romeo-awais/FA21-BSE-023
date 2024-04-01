import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [savedCalculations, setSavedCalculations] = useState([]);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountAmount = (price * discount) / 100;
      const finalPrice = price - discountAmount;
      const savedCalculation = `${price} - ${discount}% = ${finalPrice.toFixed(2)}`;
      setSavedCalculations([...savedCalculations, savedCalculation]);
    }
  };

  const renderSavedCalculation = ({ item }) => (
    <Text style={styles.historyItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator App</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={(text) => setOriginalPrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={(text) => setDiscountPercentage(text)}
      />
      <TouchableOpacity onPress={calculateDiscount} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Discount</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setHistoryModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>View History</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={historyModalVisible}
        onRequestClose={() => setHistoryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Calculation History</Text>
            <FlatList
              data={savedCalculations}
              renderItem={renderSavedCalculation}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity onPress={() => setHistoryModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding
