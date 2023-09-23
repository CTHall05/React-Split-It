import React, { useState } from 'react';
import AddFriend from './Components/AddingFriends';
import FriendList from './Components/FriendList';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  return (
    <section>
      <h1>Split It!</h1>
      <AddFriend></AddFriend>
      <FriendList></FriendList>
    </section>
  );
}

export default App;
