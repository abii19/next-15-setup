"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";

import { Users as UsersState } from "@/types/users-types";

const Users = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async (): Promise<UsersState[]> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = response.json();
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!users) return <div>No Data Found</div>;
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <div key={user.id} className="rounded border border-foreground/10 p-3 text-sm">
            <p className="text-sm">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Username:</span> {user.username}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
