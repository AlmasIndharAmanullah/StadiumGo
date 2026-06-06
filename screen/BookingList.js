import React,
{
useEffect,
useState
}
from "react";

import {
View,
Text,
FlatList,
TouchableOpacity,
StyleSheet,
Alert,
Modal,
TextInput
}
from "react-native";

import {
supabase
}
from "../lib/supabase";

export default
function BookingList(){

const [data,setData]
=
useState([]);

const [
modalVisible,
setModalVisible
]
=
useState(false);

const [
selectedItem,
setSelectedItem
]
=
useState(null);

const [
newTicket,
setNewTicket
]
=
useState("");

useEffect(()=>{

getData();

},[]);


// GET

const getData=
async()=>{

const {
data,
error
}
=
await supabase
.from("booking")
.select("*");

if(error){

console.log(error);
return;

}

setData(data);

};


// buka modal edit

const openEdit=
(item)=>{

setSelectedItem(item);

setNewTicket(
item.ticket
.toString()
);

setModalVisible(
true
);

};


// PUT

const saveEdit=
async()=>{

const {
error
}
=
await supabase
.from("booking")
.update({
ticket:
Number(
newTicket
)
})
.eq(
"id",
selectedItem.id
);

if(error){

console.log(error);

Alert.alert(
"Error",
"Update gagal"
);

return;

}

Alert.alert(
"Success",
"Ticket updated"
);

setModalVisible(
false
);

getData();

};


// DELETE

const deleteData=
(id)=>{

Alert.alert(

"Delete Booking",

"Are you sure?",

[
{
text:"Cancel"
},

{
text:"Delete",

onPress:
async()=>{

const {
error
}
=
await supabase
.from(
"booking"
)
.delete()
.eq(
"id",
id
);

if(error){

console.log(
error
);

return;

}

Alert.alert(
"Deleted",
"Booking removed"
);

getData();

}
}

]

);

};

return(

<View
style={
styles.container
}
>

<Text
style={
styles.title
}
>
Booking Data
</Text>

<FlatList

data={data}

keyExtractor={
(item)=>
item.id
.toString()
}

renderItem={
({item})=>(

<View
style={
styles.card
}
>

<Text>
ID:
{item.id}
</Text>

<Text>
Name:
{item.name}
</Text>

<Text>
Email:
{item.email}
</Text>

<Text>
Ticket:
{item.ticket}
</Text>

<Text>
Stadium:
{item.stadium}
</Text>

<View
style={
styles.row
}
>

<TouchableOpacity

style={
styles.editBtn
}

onPress=
{()=>
openEdit(
item
)
}

>

<Text>
Edit
</Text>

</TouchableOpacity>

<TouchableOpacity

style={
styles.deleteBtn
}

onPress=
{()=>
deleteData(
item.id
)
}

>

<Text>
Delete
</Text>

</TouchableOpacity>

</View>

</View>

)}

 />

<Modal
visible={
modalVisible
}
transparent
animationType=
"slide"
>

<View
style={
styles.modalBg
}
>

<View
style={
styles.modal
}
>

<Text
style={
styles.modalTitle
}
>

Edit Ticket

</Text>

<TextInput

style={
styles.input
}

value={
newTicket
}

onChangeText=
{
setNewTicket
}

keyboardType=
"numeric"

/>

<TouchableOpacity

style={
styles.saveBtn
}

onPress={
saveEdit
}

>

<Text
style={{
color:"#fff"
}}
>

Save

</Text>

</TouchableOpacity>

</View>

</View>

</Modal>

</View>

);

}

const styles=
StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#fff"
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:15
},

card:{
backgroundColor:"#f2f2f2",
padding:15,
borderRadius:12,
marginBottom:15
},

row:{
flexDirection:"row",
marginTop:10
},

editBtn:{
backgroundColor:
"orange",
padding:10,
borderRadius:8,
marginRight:10
},

deleteBtn:{
backgroundColor:
"red",
padding:10,
borderRadius:8
},

modalBg:{
flex:1,
justifyContent:
"center",
alignItems:
"center",
backgroundColor:
"rgba(0,0,0,0.5)"
},

modal:{
backgroundColor:
"#fff",
padding:20,
width:"80%",
borderRadius:12
},

modalTitle:{
fontSize:20,
fontWeight:"bold",
marginBottom:15
},

input:{
borderWidth:1,
borderColor:"#ccc",
padding:10,
borderRadius:8
},

saveBtn:{
backgroundColor:
"#007BFF",
padding:12,
marginTop:15,
borderRadius:8,
alignItems:"center"
}

});