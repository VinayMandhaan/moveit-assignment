import { useState, useEffect } from 'react';
import {FlatList, Button, SafeAreaView } from 'react-native';
import UserItem from './src/components/list';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  function handleDelete(userToDelete) {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userToDelete.id)
    );
  }

  function handleAdd() {
    const newUser = {
      id: users.length + 2,
      name: 'New User',
      email: 'newuser@example.com',
      address: {
        street: '123 New Street',
        city: 'New City',
        zipcode: '12345',
      },
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function handleUpdate(userToUpdate) {
    if (userToUpdate?.id == 2) {
      const updatedUser = {
        ...userToUpdate,
        address: {
          ...userToUpdate.address,
          street: 'New Street',
        },
      };
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userToUpdate.id ? updatedUser : user))
      );
    }


  }

  function renderUserItem({ item }) {
    return (
      <UserItem user={item} onDelete={handleDelete} onUpdate={handleUpdate} />
    );
  }

  return (
    <SafeAreaView>
      <Button title="Add User" onPress={handleAdd} />
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default App
