import React, { useEffect, useState } from "react";
import { Container, Box, TextField } from "@mui/material";

const TabData = () => {
  const [user, setUser] = useState({});
  const [episode, setEpisode] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const fetchData = () => {
    fetch(`https://rickandmortyapi.com/api/character/${episode}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  //отменяет действие браузера по умолчанию 
    setEpisode(e.target.value);
    fetchData();
    setEpisode("");
  };
  console.log(episode);

  return (
    <Container>
      <Container sx={{ display: "flex", gap: "100px" }}>
        <Box>
          <h4>Name</h4> <Box>{user.name}</Box>
        </Box>
        <Box>
          <h4>Photo</h4>
          <Box>
            <img src={user.image} />
          </Box>
        </Box>
        <Box>
          <h4>Episode</h4> <Box></Box>
          <form onSubmit={handleSubmit}>
            <TextField
              type="number"
              id="message"
              name="message"
              label="episode"
              value={episode}
              required
              onChange={(e) => setEpisode(e.target.value)}
            />
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default TabData;
