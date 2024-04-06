import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom style={{ color: "blue" }}>
        Welcome to the Dashboard!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            className="card"
            style={{ padding: "20px", backgroundColor: "#f3f3f3" }}
          >
            <Typography variant="h5" gutterBottom>
              Card 1
            </Typography>
            <Typography variant="body1">Data: Sample Data 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            className="card"
            style={{ padding: "20px", backgroundColor: "#f3f3f3" }}
          >
            <Typography variant="h5" gutterBottom>
              Card 2
            </Typography>
            <Typography variant="body1">Data: Sample Data 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            className="card"
            style={{ padding: "20px", backgroundColor: "#f3f3f3" }}
          >
            <Typography variant="h5" gutterBottom>
              Card 3
            </Typography>
            <Typography variant="body1">Data: Sample Data 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: "20px", backgroundColor: "#f3f3f3" }}
          >
            <Typography variant="h5" gutterBottom>
              Line Chart
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: "20px", backgroundColor: "#f3f3f3" }}
          >
            <Typography variant="h5" gutterBottom>
              Bar Chart
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#8884d8" />
              <Bar dataKey="pv" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
