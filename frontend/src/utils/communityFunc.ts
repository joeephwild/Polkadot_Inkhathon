
import { firestore } from "firebase/app";
import "firebase/firestore";

// Create a Community
const createCommunity = async (name: string, description: string, userId: string) => {
  const db = firestore();
  const communityRef = db.collection("communities").doc();
  const communityData = {
    name: name,
    description: description,
    members: [userId], // The user who created the community is the first member
    posts: [] // Initialize an empty array for posts
  };
  await communityRef.set(communityData);
  return communityRef.id; // Return the ID of the newly created community
};

//Join a Community
const joinCommunity = async (communityId: string, userId: string) => {
    const db = firestore();
    const communityRef = db.collection("communities").doc(communityId);
    await communityRef.update({
      members: firestore.FieldValue.arrayUnion(userId)
    });
    const communitySnapshot = await communityRef.get();
    return communitySnapshot.data(); // Return the updated community data
  };

  // Leave a Community
  const leaveCommunity = async (communityId: string, userId: string) => {
    const db = firestore();
    const communityRef = db.collection("communities").doc(communityId);
    await communityRef.update({
      members: firestore.FieldValue.arrayRemove(userId)
    });
    const communitySnapshot = await communityRef.get();
    return communitySnapshot.data(); // Return the updated community data
  };

 // Store Community Details
  const updateCommunityDetails = async (communityId: string, details: { name?: string, description?: string }) => {
    const db = firestore();
    const communityRef = db.collection("communities").doc(communityId);
    await communityRef.update(details);
    const communitySnapshot = await communityRef.get();
    return communitySnapshot.data(); // Return the updated community data
  };