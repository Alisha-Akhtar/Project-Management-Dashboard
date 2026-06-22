import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

import ProjectTable from "../components/ProjectTable";
import { initialProjects } from "../data/projects";

export default function Dashboard() {
  const [selectedArea, setSelectedArea] = useState("");

  const cards = [
    {
      title: "All Projects",
      value: initialProjects.length,
      area: "",
    },
    {
      title: "AI Projects",
      value: initialProjects.filter(
        (p) => p.area === "AI"
      ).length,
      area: "AI",
    },
    {
      title: "Web Projects",
      value: initialProjects.filter(
        (p) => p.area === "Web"
      ).length,
      area: "Web",
    },
    {
      title: "Education Projects",
      value: initialProjects.filter(
        (p) => p.area === "Education"
      ).length,
      area: "Education",
    },
  ];

  const filteredProjects =
    selectedArea === ""
      ? initialProjects
      : initialProjects.filter(
          (p) => p.area === selectedArea
        );

  const chartData = [
    {
      name: "AI",
      value: initialProjects.filter(
        (p) => p.area === "AI"
      ).length,
    },
    {
      name: "Web",
      value: initialProjects.filter(
        (p) => p.area === "Web"
      ).length,
    },
    {
      name: "Education",
      value: initialProjects.filter(
        (p) => p.area === "Education"
      ).length,
    },
  ];

  const colors = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
  ];

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Welcome Back 👋
      </Typography>

      {/* Cards */}

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid
            item
            xs={12}
            md={3}
            key={card.title}
          >
            <Card
              onClick={() =>
                setSelectedArea(card.area)
              }
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                boxShadow: 5,
                "&:hover": {
                  transform:
                    "translateY(-5px)",
                },
              }}
            >
              <CardContent>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  {card.value}
                </Typography>

                <Typography>
                  {card.title}
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Chart */}

      <Card
        sx={{
          mt: 4,
          p: 2,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Project Distribution
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {chartData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={colors[index]}
                  />
                )
              )}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </Card>

      {/* Projects */}

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mt: 4,
          mb: 2,
        }}
      >
        Projects
      </Typography>

      <ProjectTable
        rows={filteredProjects}
      />

    </Box>
  );
}