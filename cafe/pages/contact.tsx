import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import logo from '../public/images/pandalogo.jpeg';
import Image from 'next/image';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    console.log('Hola');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <FormControl onSubmit={handleSubmit}>
        <TextField
          label="Nombre y apellidos"
          value={name}
          onChange={(event) => setName(event.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Teléfono"
          type="text"
          value={cellphone}
          onChange={(event) => setCellphone(event.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Mensaje"
          multiline
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          <SendIcon />
          Enviar
        </Button>
      </FormControl>
    </Box>
  );
}
