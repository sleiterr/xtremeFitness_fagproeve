import React from "react";
import PageboardCard from "./PageboardCard";
import AbonnementTable from "./AbonnementTable";
import AbonnementTableHeader from "./AbonnementTableHeader";
import SummaryTablePage from "./SummaryTablePage";
import { useUserWorkouts } from "./userFetchBoard";
import { useLocalStorage } from "@uidotdev/usehooks";
import { jwtDecode } from "jwt-decode";

const PageboardView = () => {
  const [token] = useLocalStorage("token", null);
    const userId = token ? jwtDecode(token)._id : null;
    
  const { workouts, loading, error } = useUserWorkouts(userId, token);

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-600">Loading workout...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <PageboardCard>
      <AbonnementTable
        headers={
          <>
            <AbonnementTableHeader align="center">Hold</AbonnementTableHeader>
            <AbonnementTableHeader align="center">Dag</AbonnementTableHeader>
            <AbonnementTableHeader align="center">
              Tidspunkt
            </AbonnementTableHeader>
            <AbonnementTableHeader align="center">
              Handlinger
            </AbonnementTableHeader>
          </>
        }
      >
        {workouts.map((item) => (
          <tr key={item._id}>
            <SummaryTablePage align="center">{item.title}</SummaryTablePage>
            <SummaryTablePage align="center">{item.weekday}</SummaryTablePage>
            <SummaryTablePage align="center">{item.time}</SummaryTablePage>
          </tr>
        ))}
      </AbonnementTable>
    </PageboardCard>
  );
};

export default PageboardView;
