
import React from 'react';
import { View, Text, Button } from 'react-native';

function UserItem({ user, onDelete, onUpdate }) {
    return (
        <View>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
            <Text style={{ fontWeight: 'bold' }}>{user?.address?.street}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                <Button title="Delete" onPress={() => onDelete(user)} />
                <Button title="Update" onPress={() => onUpdate(user)} />
            </View>

        </View>
    );
}

export default UserItem