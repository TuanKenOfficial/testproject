import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  StatusBar
} from "react-native";
import { useState } from "react";
import ApiCall from "./components/apicall";
export default function App() {
  const [value, setvalue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnChangeText(getEnteredText) {
    setvalue(getEnteredText);
  }
  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
  }
  function handleRemoveItem(getCurrentIndex) {
    let cpyListOfNotes = [...listOfNotes];

    cpyListOfNotes = cpyListOfNotes.filter(
      (_, index) => getCurrentIndex != index
    );
    setListOfNotes(cpyListOfNotes);
  }

  console.log(listOfNotes);

  return (
    <View
      style={{
        padding: 60,
        paddingHorizontal: 10,
        flex: 1,
      }}
    >
      {/* <Text style={styles.text}>Ngọc Thẩm NTJ</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChangeText}
          placeholder="Nhập nội dung"
        ></TextInput>
        <Button
          onPress={handleOnPressButton}
          style={styles.button}
          color={"red"}
          title="Nhập"
        ></Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList //flatlist
          data={listOfNotes}
          renderItem={(itemData) => (
            <Pressable onPress={() => handleRemoveItem(itemData.index)}>
              <Text style={styles.listItem}>{itemData.item}</Text>
            </Pressable>
          )}
        />

        
       
      </View>
      <View style={styles.apiContainer}>
          <ApiCall/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: StatusBar.currentHeight,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    padding: 30,
    flex: 1,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 20,
    color: "#fff",
    fontSize: 20,
  },
  apiContainer:{
    flex : 2
  },
});
