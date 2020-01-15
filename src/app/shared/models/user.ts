export class User {
   public name: string;
   public email: string;
   public password: string;
   public phone: number;
   public designation: string

   constructor(name: string, email: string, phone: number,designation?:string,password?:string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.designation = designation;
      this.password = password
   }
   public static create(): User {
      return new User(null, null, null);
   }

   public static teamMember(): User {
      return new User(null, null, null,null,null);
   }
}