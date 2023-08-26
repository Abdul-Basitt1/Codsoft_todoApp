import React from "react";
import { Modal } from "react-native";
import { ModalButton, ModalContainer, ModalView, ModalAction,ModalActionGroup, StyledInput, ModalIcon, HeaderTitle, colors } from "../styles/appStyles";
import {AntDesign} from "@expo/vector-icons";

const InputModal = ({modalVisible, setModalVisible, todoInputValue, setTodoInputValue, handleAddNewTodo, todos, todoTobeEdited, setTodoTobeEdited, handleEditTodo}) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        setTodoInputValue("");
        setTodoTobeEdited(null);
    };

    const handleSubmit = () => {
        if(!todoTobeEdited){
            handleAddNewTodo({
                title: todoInputValue,
                date: new Date().toUTCString(),
                key: `${(todos[todos.length-1] && parseInt(todos[todos.length-1].key) + 1) || 1}`
            });
        }else{
            handleEditTodo({
                title: todoInputValue,
                date: todoTobeEdited.date,
                key: todoTobeEdited.key
            })
        }
        
        setTodoInputValue("");
    }
    return(
        <>
            <ModalButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={colors.secondary}/>
            </ModalButton>

            <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle>ToDos</HeaderTitle>
                            <AntDesign name="edit" size={30} color={colors.tertiary}/>
                        </ModalIcon>

                        <StyledInput
                            placeholder="Add a Todo"
                            placeholderTextColor={colors.alternative}
                            selectionColor={colors.secondary}
                            autoFocus={true}
                            onChangeText={(text) => setTodoInputValue(text)}
                            value={todoInputValue}
                            onSubmitEditing={handleSubmit}
                        />

                        <ModalActionGroup>
                            <ModalAction color = {colors.primary} onPress={handleCloseModal}>
                                <AntDesign name="close" size={28} color={colors.tertiary}/>
                            </ModalAction>
                            <ModalAction color = {colors.tertiary} onPress={handleSubmit}>
                                <AntDesign name="check" size={28} color={colors.secondary}/>
                            </ModalAction>
                        </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
                
            </Modal>
        </>
    );
}
export default InputModal;