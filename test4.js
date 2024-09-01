// function b() {
//     console.log(this)
// }
// b();
// khi func dung mot minh, va khong ai goi chinh no, thi nguoi goi no chinh
// la global;
// function d() {
//    function e() {console.log(this)}
//     return e;
// }
// let f = d();
// f();

class User {
  getUser() {
      console.log(this)
    }   
    getUser2 = () => {console.log(this)}
}

const user1 = new User();
user1.getUser()
user1.getUser2()

// const c = () => { console.log(this) }
// c();
// khi arrow func dung mot minh, va khong ai goi chinh no, thi nguoi goi no la
// khong ai ca


