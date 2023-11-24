// import { useForm, SubmitHandler } from "react-hook-form";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";
// import "./app/global.css";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// interface IFormInput {
//   name: string;
//   email: string;
//   course: string;
//   gender: string;
// }

// import { Input } from "@/components/ui/input";

// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function App() {
//   // Destructure necessary methods from useForm
//   const { register, handleSubmit } = useForm<IFormInput>();

//   // Define the form submission handler
//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     console.log(data); // Logging the form data
//     // Here, you can perform actions like API calls or state updates with the form data
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Create project</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//         {/* Card components for styling */}
//         <CardContent>
//           {/* Form with handleSubmit onSubmit */}
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Grid layout for form elements */}
//             <div className="grid w-full items-center gap-4">
//               {/* Input for Name */}
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   {...register("name", { required: true })}
//                   id="name"
//                   placeholder="Enter a name"
//                 />
//               </div>
//               {/* Input for Email */}
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   {...register("email", { required: true })}
//                   id="email"
//                   placeholder="Enter an email"
//                 />
//               </div>
//               {/* Select for Course */}
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="course">Course</Label>
//                 <Select {...register("course")}>
//                   <SelectTrigger id="course">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper">
//                     {/* Options for the course */}
//                     <SelectItem value="BCA">BCA</SelectItem>
//                     <SelectItem value="BBA">BBA</SelectItem>
//                     <SelectItem value="MBA">MBA</SelectItem>
//                     <SelectItem value="BA">BA</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               {/* Radio group for Gender */}
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="gender">Gender</Label>
//                 {/* Radio buttons */}
//                 <RadioGroup defaultValue="comfortable" className="flex items-center justify-start flex-row">
//                   {/* Male */}
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="default" id="r1" />
//                     <Label htmlFor="r1">Male</Label>
//                   </div>
//                   {/* Female */}
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="comfortable" id="r2" />
//                     <Label htmlFor="r2">Female</Label>
//                   </div>
//                 </RadioGroup>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//         {/* Button to submit the form */}
//         <CardFooter className="flex justify-between">
//           <Button type="submit">Submit</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

