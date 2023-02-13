import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

function CreatePost({ navigation }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
            <Image source={require("../assets/img/arrow-left.jpg")} />
          </TouchableOpacity>

          <Text style={styles.title}>Создать публикацию</Text>
          <View
            style={{ width: 24, height: 24, backgroundColor: "transparent" }}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.credentials}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.photoContainer}>
                <TouchableOpacity style={styles.photoIcon}>
                  <Image source={require("../assets/img/camera.jpg")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.credensTitle}>Загрузите фото</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Название..." style={styles.input} />
              </View>
              <View style={{ ...styles.inputContainer, marginTop: 16 }}>
                <Image
                  style={{ marginRight: 4 }}
                  source={require("../assets/img/map-pin.jpg")}
                />
                <TextInput placeholder="Местность..." style={styles.input} />
              </View>
              <TouchableOpacity style={styles.buttonActive}>
                <Text style={styles.buttonTextActive}>Опубликовать</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
        <TouchableOpacity style={styles.delete}>
          <Image source={require("../assets/img/trash4.jpg")} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  header: {
    marginTop: 55,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: "RobotoMedium",
    marginBottom: 11,
  },
  main: {
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
  },
  photoContainer: {
    width: 343,
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginHorizontal: 16,
  },
  photoIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  photoBtn: {
    height: 20,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "E8E8E8",
    borderRadius: 5,
  },
  credentials: {
    marginTop: 8,
  },
  credensTitle: {
    fontFamily: "RobotoRegular",
    color: "#BDBDBD",
    marginBottom: 32,
    marginLeft: 16,
    fontSize: 16,
  },
  inputContainer: {
    marginHorizontal: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
  buttonInactive: {
    marginTop: 32,
    marginHorizontal: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActive: {
    marginTop: 32,
    marginHorizontal: 16,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextInactive: {
    fontFamily: "RobotoRegular",
    color: "#BDBDBD",
    fontSize: 16,
  },
  buttonTextActive: {
    fontFamily: "RobotoRegular",
    color: "#fff",
    fontSize: 16,
  },
  delete: {
    marginBottom: 34,
    marginTop: 1,
    alignSelf: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePost;
