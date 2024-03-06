import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProposalCard = ({ imageSource, name, description, yesCount, noCount }) => {
  const totalVotes = yesCount + noCount;
  const yesPercentage = totalVotes === 0 ? 0 : Math.round((yesCount / totalVotes) * 100);
  const noPercentage = totalVotes === 0 ? 0 : Math.round((noCount / totalVotes) * 100);

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.votesContainer}>
          <Text style={styles.voteText}>Yes: {yesPercentage}%</Text>
          <Text style={styles.voteText}>No: {noPercentage}%</Text>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Vote Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: "100%",
    // borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  votesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  voteText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProposalCard;
