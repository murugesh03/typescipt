let message: string = "hello world";
console.log(message);

let age: number = 25;

let isAdmin: boolean = true;

let arrValues: string[] = ["sam", "kumar"];

// let studntInfo: {
//   name: string;
//   age: number;
// } = {
//   name: "sam",
//   age: 10.1
// };

function addNumbers(a: number, b: number) {
  return a + b;
}
console.log(addNumbers(1, 12));

//interface and type
//
interface Studentinfo {
  name: string;
  age: number;
  contactNo: number;
  personalEmail?: string;
}

let studntInfo: Studentinfo = {
  name: "sam",
  age: 10.1,
  contactNo: 1234567890
};

interface StudentTwo extends Studentinfo {
  city: string | null;
}

let studntInfo1: StudentTwo = {
  name: "kumar",
  age: 10.1,
  contactNo: 1234567890,
  city: "bangalore"
};

interface StudentType {
  name: string;
  age: number;
  contactNo: number;
  personalEmail?: string;
  loading: "loading" | "success" | "error";
}

type Loading = "loading" | "success" | "error";

const loading: Loading = "loading";

type Point = [number, number];

const location: Point = [40.7128, -74.006];

type ID = string | number;

let userId: ID = "user123";

type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};
let employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 101
};

//Condition types

type isLoggedIn<T> = T extends string ? true : false;

type UserStatus = isLoggedIn<string>;
type GuestStatus = isLoggedIn<number>;

let loggeedIn: UserStatus = true;
let guestStatus: GuestStatus = false;

console.log(loggeedIn, guestStatus);
