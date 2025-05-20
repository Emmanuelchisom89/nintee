import { useGetAuthUserQuery, useUpdateTenantMutation } from "@/state/api";
import React, { use } from "react";

const TenantSettings = () => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const [updateTenant] = useUpdateTenantMutation();

  if (authLoading) return <>Loading...</>;
  return <div></div>;
};

export default TenantSettings;
