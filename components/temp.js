import {firebase} from "@react-native-firebase/database"

function fn(data){
    const data = {
        "name":name,
        "father_name":father_name,
        "contact":contact,
        "email":email,
        "gender":gender,
        "password":password,
    }
    const db = firebase.app().database("https://coursecws-default-rtdb.asia-southeast1.firebasedatabase.app/")
    const ref = db.ref("admissions");
    const newRef = ref.push();
    newRef.set(data).then(()=>console.log("succ"));

}