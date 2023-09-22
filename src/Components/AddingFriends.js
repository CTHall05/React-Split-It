import React, { useState } from 'react';

function AddingFriends({ onAddFriend }) {
  const [friendName, setFriendName] = useState('');

  const handleAddFriend = () => {
    if (friendName.trim() !== '') {
      onAddFriend(friendName);
      setFriendName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter friend's name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <button onClick={handleAddFriend}>Add Friend</button>
    </div>
  );
}

export default AddingFriends;
