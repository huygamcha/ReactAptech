let my = 'ok';
let nam: number = 0;
let myarray: number[] = []
myarray = [2, 3, 4]

let myarray1: [number, number, number, string]
myarray1 = [1, 2, 3, 'huy']

let user: { id: number, name: string, isClass?: boolean } = { id: 1, name: 'huy' }
// có thể tạo object bằng interface
interface User {
    id: number,
    name: string,
    address: string
}
// lợi ích của interface là có thể kế thừa
interface UserInherit extends User {
    email: string
}
let UserC: UserInherit = { id: 4, name: 'nga', address: 'dn', email: 'nga@example.com' }

let UserA: User = { id: 2, name: 'name', address: 'nhs' }
// có thể dùng type
type UserType = {
    id: number,
    name: string,
    class?: number
}
let UserB: UserType = { id: 3, name: 'nhat' }
console.log(UserC);
console.log(UserB);
console.log(UserA);
console.log(user);
console.log(nam);
console.log(my);
console.log('nam');
console.log(myarray);
console.log(myarray1);