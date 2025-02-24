"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        // const res = await fetch("https://girls-shop.vercel.app/actions/getUsers");
        const res = await fetch("http://localhost:3000/actions/getUsers");
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

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
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className="h-4 w-6 bg-base-300" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24 bg-base-300" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-40 bg-base-300" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-16 bg-base-300" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-20 bg-base-300" />
                </TableCell>
              </TableRow>
            ))
          : users.length > 0
          ? users.map((user, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.role}</TableCell>
                <TableCell className="text-right">{user.status}</TableCell>
              </TableRow>
            ))
          : !loading && (
              <TableRow>
                <TableCell colSpan="5" className="text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
      </TableBody>
    </Table>
  );
}
