import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const users = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      username: "johndoe123",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Emma Smith",
      email: "emmasmith@example.com",
      username: "emma_smith",
      role: "User",
      status: "Inactive",
    },
    {
      name: "Liam Johnson",
      email: "liamjohnson@example.com",
      username: "liam_j",
      role: "Moderator",
      status: "Active",
    },
    {
      name: "Olivia Brown",
      email: "oliviabrown@example.com",
      username: "olivia_brown",
      role: "User",
      status: "Pending",
    },
    {
      name: "Noah Wilson",
      email: "noahwilson@example.com",
      username: "noah_w",
      role: "Admin",
      status: "Active",
    },
  ];
  
  
  export function UsersTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">NO</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Role</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{idx+1}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  