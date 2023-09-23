import React from 'react';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => {
        <li key={index}>{friend}</li>;
      })}
    </ul>
  );
}

export default FriendList;
