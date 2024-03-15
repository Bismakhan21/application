
export const navItems = [

  {
    label: "Home",
    link: "/home",
    both: true,
  },

  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/",
    auth_required: false,
  },

  {
    label: 'DonorForm',
    link:'/donorform',
    auth_required:true,
  },
 
  {
    label:"Logout" ,
    link: "/",
    auth_required: true,
  }
];
